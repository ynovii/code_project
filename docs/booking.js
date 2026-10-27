/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var $ = function $(id) {
  return document.getElementById(id);
};
var params = new URLSearchParams(window.location.search);
var FORMATS = [{
  id: 'single',
  name: 'Разовое занятие',
  price: '600 ₽'
}, {
  id: 'abon',
  name: 'Абонемент',
  price: 'от 2 000 ₽'
}, {
  id: 'personal',
  name: 'Индивидуальное занятие',
  price: '1 700 ₽'
}, {
  id: 'unknown',
  name: 'Пока не знаю — подскажите',
  price: ''
}];
var DIRS = [{
  id: 'dance',
  name: 'Танцы'
}, {
  id: 'yoga',
  name: 'Йога в гамаках'
}, {
  id: 'pilates',
  name: 'Пилатес'
}, {
  id: 'lady',
  name: 'Lady Style'
}];
var CONTACTS = ['Звонок', 'Telegram', 'ВКонтакте'];
var MONTHS_GEN = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
var PLAN_INFO = {
  a4: {
    format: 'abon',
    detail: '4 занятия'
  },
  a8: {
    format: 'abon',
    detail: '8 занятий'
  },
  a12: {
    format: 'abon',
    detail: '12 занятий'
  },
  a16: {
    format: 'abon',
    detail: '16 занятий'
  },
  unlim: {
    format: 'abon',
    detail: 'Безлимитный'
  },
  single: {
    format: 'single',
    detail: ''
  },
  personal: {
    format: 'personal',
    detail: ''
  },
  wedding: {
    format: 'unknown',
    detail: 'Свадебный танец'
  },
  gift: {
    format: 'unknown',
    detail: 'Подарочный сертификат'
  }
};
var step = 1;
var format = 'abon';
var dir = '';
var contact = 'Звонок';
var detail = '';
var plan = PLAN_INFO[params.get('plan')];
if (plan) {
  format = plan.format;
  detail = plan.detail;
}
if (params.get('date')) {
  format = 'single';
  dir = params.get('dir') || '';
  var _params$get$split$map = params.get('date').split('-').map(Number),
    _params$get$split$map2 = _slicedToArray(_params$get$split$map, 3),
    y = _params$get$split$map2[0],
    m = _params$get$split$map2[1],
    d = _params$get$split$map2[2];
  detail = "".concat(params.get('title'), ", ").concat(d, " ").concat(MONTHS_GEN[m - 1], ", ").concat(params.get('time'));
}
var backHref = params.get('from') === 'schedule' ? '../index.html' : 'prices.html';
$('close').href = backHref;
$('return').href = backHref;
function renderStep1() {
  $('options').innerHTML = FORMATS.map(function (f) {
    return "\n    <div class=\"option".concat(format === f.id ? ' option--on' : '', "\" data-id=\"").concat(f.id, "\">\n      <div class=\"option__radio\"></div>\n      <div class=\"option__name\">").concat(f.name, "</div>\n      <div class=\"option__price\">").concat(f.price, "</div>\n    </div>");
  }).join('');
  $('dirs').innerHTML = DIRS.map(function (d) {
    return "<div class=\"chip".concat(dir === d.id ? ' chip--active' : '', "\" data-id=\"").concat(d.id, "\">").concat(d.name, "</div>");
  }).join('');
}
$('options').addEventListener('click', function (e) {
  var item = e.target.closest('.option');
  if (item) {
    format = item.dataset.id;
    renderStep1();
  }
});
$('dirs').addEventListener('click', function (e) {
  var chip = e.target.closest('.chip');
  if (chip) {
    dir = dir === chip.dataset.id ? '' : chip.dataset.id;
    renderStep1();
  }
});
function renderContacts() {
  $('contact').innerHTML = CONTACTS.map(function (c) {
    return "<div class=\"chip".concat(contact === c ? ' chip--active' : '', "\" data-id=\"").concat(c, "\">").concat(c, "</div>");
  }).join('');
}
$('contact').addEventListener('click', function (e) {
  var chip = e.target.closest('.chip');
  if (chip) {
    contact = chip.dataset.id;
    renderContacts();
  }
});
function showStep(n) {
  step = n;
  [1, 2, 3].forEach(function (i) {
    return $('step' + i).hidden = i !== n;
  });
  $('pill').hidden = n === 3;
  $('progress').hidden = n === 3;
  $('pill').textContent = "\u0428\u0430\u0433 ".concat(n, " \u0438\u0437 3");
  document.querySelectorAll('.progress__bar').forEach(function (bar, i) {
    return bar.classList.toggle('progress__bar--on', i < n);
  });
  $('modal').scrollIntoView({
    block: 'nearest'
  });
}
function pickedText() {
  var f = FORMATS.find(function (x) {
    return x.id === format;
  });
  var d = DIRS.find(function (x) {
    return x.id === dir;
  });
  var parts = [f.id === 'unknown' ? 'Пока не знаю' : f.name];
  if (detail) parts.push(detail);
  if (d && !params.get('date')) parts.push(d.name);
  return parts.join(', ');
}
$('go2').addEventListener('click', function () {
  $('picked').textContent = pickedText();
  showStep(2);
});
$('back').addEventListener('click', function () {
  return showStep(1);
});
$('send').addEventListener('click', function () {
  var name = $('name').value.trim();
  var phone = $('phone').value.trim();
  var badName = name.length < 2;
  var badPhone = phone.replace(/\D/g, '').length < 10;
  $('e-name').hidden = !badName;
  $('e-phone').hidden = !badPhone;
  if (badName || badPhone) return;
  try {
    var list = JSON.parse(localStorage.getItem('dfs-requests') || '[]');
    list.push({
      what: pickedText(),
      name: name,
      phone: phone,
      contact: contact,
      at: new Date().toISOString()
    });
    localStorage.setItem('dfs-requests', JSON.stringify(list));
  } catch (e) {}
  showStep(3);
});
renderStep1();
renderContacts();
showStep(1);
/******/ })()
;