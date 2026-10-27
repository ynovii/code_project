/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var MONTHS_NOM = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
var MONTHS_GEN = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
var MONTHS_SHORT = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
var DIR_TITLE = {
  dance: 'Танцы',
  yoga: 'Йога в гамаках',
  pilates: 'Пилатес'
};
var EVENTS = [{
  wd: 7,
  hour: 11,
  dir: 'dance',
  title: 'Lady Style',
  sub: 'Jazz-funk · heels',
  group: 'Взрослая группа',
  mood: 'Зарядиться'
}, {
  wd: 2,
  hour: 11,
  dir: 'yoga',
  trainer: 'Анна',
  group: 'Взрослая группа',
  mood: 'Расслабиться'
}, {
  wd: 5,
  hour: 11,
  dir: 'yoga',
  trainer: 'Анна',
  group: 'Взрослая группа',
  mood: 'Расслабиться'
}, {
  wd: 4,
  hour: 12,
  dir: 'dance',
  trainer: 'Юлия',
  group: 'Детская группа',
  mood: 'Повеселиться'
}, {
  wd: 7,
  hour: 12,
  dir: 'dance',
  trainer: 'Юлия',
  group: 'Детская группа',
  mood: 'Повеселиться'
}, {
  wd: 3,
  hour: 13,
  dir: 'yoga',
  trainer: 'Анна',
  group: 'Взрослая группа',
  mood: 'Укрепить спину'
}, {
  wd: 6,
  hour: 13,
  dir: 'pilates',
  trainer: 'Елена',
  group: 'Взрослая группа',
  mood: 'Стать сильнее'
}, {
  wd: 2,
  hour: 14,
  dir: 'dance',
  trainer: 'Юлия',
  group: 'Детская группа',
  mood: 'Повеселиться'
}, {
  wd: 3,
  hour: 14,
  dir: 'pilates',
  trainer: 'Елена',
  group: 'Взрослая группа',
  roomy: true,
  mood: 'Стать сильнее'
}, {
  wd: 6,
  hour: 14,
  dir: 'yoga',
  trainer: 'Анна',
  group: 'Взрослая группа',
  mood: 'Укрепить спину'
}, {
  wd: 1,
  hour: 15,
  dir: 'yoga',
  trainer: 'Анна',
  group: 'Взрослая группа',
  mood: 'Расслабиться'
}, {
  wd: 3,
  hour: 15,
  dir: 'dance',
  trainer: 'Юлия',
  group: 'Детская группа',
  mood: 'Повеселиться'
}, {
  wd: 5,
  hour: 15,
  dir: 'pilates',
  trainer: 'Елена',
  group: 'Взрослая группа',
  mood: 'Стать сильнее'
}, {
  wd: 2,
  hour: 16,
  dir: 'dance',
  trainer: 'Юлия',
  group: 'Подростки',
  mood: 'Зарядиться'
}, {
  wd: 6,
  hour: 16,
  dir: 'dance',
  trainer: 'Юлия',
  group: 'Взрослая группа',
  mood: 'Зарядиться'
}, {
  wd: 3,
  hour: 17,
  dir: 'pilates',
  trainer: 'Елена',
  group: 'Взрослая группа',
  mood: 'Стать сильнее'
}, {
  wd: 4,
  hour: 17,
  dir: 'yoga',
  trainer: 'Анна',
  group: 'Взрослая группа',
  mood: 'Укрепить спину'
}];
var HOURS = [11, 12, 13, 14, 15, 16, 17];
var FILTERS = {
  dir: {
    all: 'Все',
    options: Object.entries(DIR_TITLE)
  },
  age: {
    all: 'Все возрасты',
    options: ['Детская группа', 'Подростки', 'Взрослая группа'].map(function (x) {
      return [x, x];
    })
  },
  trainer: {
    all: 'Все преподаватели',
    options: ['Анна', 'Юлия', 'Елена'].map(function (x) {
      return [x, x];
    })
  },
  mood: {
    all: 'Все',
    options: ['Стать сильнее', 'Укрепить спину', 'Расслабиться', 'Зарядиться', 'Повеселиться'].map(function (x) {
      return [x, x];
    })
  }
};
var selected = {
  dir: '',
  age: '',
  trainer: '',
  mood: ''
};
var $ = function $(id) {
  return document.getElementById(id);
};
var table = $('table');
var weekOffset = 0;
var MAX_WEEKS = 2;
var pad = function pad(n) {
  return String(n).padStart(2, '0');
};
var iso = function iso(d) {
  return "".concat(d.getFullYear(), "-").concat(pad(d.getMonth() + 1), "-").concat(pad(d.getDate()));
};
function getWeek() {
  var d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - ((d.getDay() || 7) - 1) + weekOffset * 7);
  return Array.from({
    length: 7
  }, function (_, i) {
    var day = new Date(d);
    day.setDate(d.getDate() + i);
    return day;
  });
}
var matches = function matches(e) {
  return (!selected.dir || e.dir === selected.dir) && (!selected.age || e.group === selected.age) && (!selected.trainer || e.trainer === selected.trainer) && (!selected.mood || e.mood === selected.mood);
};
function closeMenus() {
  document.querySelectorAll('.filter__menu').forEach(function (m) {
    return m.hidden = true;
  });
  document.querySelectorAll('.filter__field--open').forEach(function (f) {
    return f.classList.remove('filter__field--open');
  });
}
var _loop = function _loop() {
  var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
    key = _Object$entries$_i[0],
    cfg = _Object$entries$_i[1];
  var menu = $('f-' + key);
  var field = menu.parentElement;
  var draw = function draw() {
    menu.innerHTML = [['', cfg.all]].concat(_toConsumableArray(cfg.options)).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        value = _ref2[0],
        label = _ref2[1];
      return "<div class=\"filter__option".concat(selected[key] === value ? ' filter__option--on' : '', "\" data-value=\"").concat(value, "\">").concat(label, "</div>");
    }).join('');
  };
  draw();
  field.addEventListener('click', function (ev) {
    var option = ev.target.closest('.filter__option');
    if (option) {
      selected[key] = option.dataset.value;
      $('v-' + key).textContent = option.textContent;
      draw();
      closeMenus();
      render();
      return;
    }
    var wasOpen = !menu.hidden;
    closeMenus();
    menu.hidden = wasOpen;
    field.classList.toggle('filter__field--open', !wasOpen);
  });
};
for (var _i = 0, _Object$entries = Object.entries(FILTERS); _i < _Object$entries.length; _i++) {
  _loop();
}
document.addEventListener('click', function (ev) {
  if (!ev.target.closest('.filter__field')) closeMenus();
});
function render() {
  closePopup();
  var week = getWeek();
  var today = iso(new Date());
  var first = week[0];
  var last = week[6];
  $('month').textContent = first.getMonth() === last.getMonth() ? MONTHS_NOM[first.getMonth()] : "".concat(MONTHS_NOM[first.getMonth()], " \u2014 ").concat(MONTHS_NOM[last.getMonth()]);
  $('range').textContent = first.getMonth() === last.getMonth() ? "\u041D\u0435\u0434\u0435\u043B\u044F ".concat(first.getDate(), "\u2013").concat(last.getDate(), " ").concat(MONTHS_GEN[last.getMonth()]) : "\u041D\u0435\u0434\u0435\u043B\u044F ".concat(first.getDate(), " ").concat(MONTHS_GEN[first.getMonth()], " \u2013 ").concat(last.getDate(), " ").concat(MONTHS_GEN[last.getMonth()]);
  $('prev').disabled = weekOffset <= -MAX_WEEKS;
  $('next').disabled = weekOffset >= MAX_WEEKS;
  var html = '<div class="table__row table__head"><div class="table__corner">Время</div>';
  html += week.map(function (d) {
    return "<div class=\"table__day".concat(iso(d) === today ? ' table__day--today' : '', "\">").concat(d.getDate(), " ").concat(MONTHS_SHORT[d.getMonth()], "</div>");
  }).join('');
  html += '</div>';
  var _loop2 = function _loop2() {
    var hour = _HOURS[_i2];
    html += "<div class=\"table__row\"><div class=\"table__time\">".concat(hour, ":00</div>");
    var _loop3 = function _loop3(wd) {
      var e = EVENTS.find(function (x) {
        return x.wd === wd && x.hour === hour;
      });
      html += '<div class="table__cell">' + (e ? eventHtml(e, EVENTS.indexOf(e)) : '') + '</div>';
    };
    for (var wd = 1; wd <= 7; wd++) {
      _loop3(wd);
    }
    html += '</div>';
  };
  for (var _i2 = 0, _HOURS = HOURS; _i2 < _HOURS.length; _i2++) {
    _loop2();
  }
  table.innerHTML = html;
}
function eventHtml(e, index) {
  var cls = ['event', 'event--' + e.dir, e.roomy ? 'event--roomy' : '', matches(e) ? '' : 'event--off'].join(' ');
  return "<button class=\"".concat(cls, "\" type=\"button\" data-index=\"").concat(index, "\">\n      <span class=\"event__title\">").concat(e.title || DIR_TITLE[e.dir], "</span>\n      ").concat(e.sub ? "<span class=\"event__text\">".concat(e.sub, "</span>") : '', "\n      ").concat(e.trainer ? "<span class=\"event__text\">\u0422\u0440\u0435\u043D\u0435\u0440: ".concat(e.trainer, "</span>") : '', "\n      <span class=\"event__text\">").concat(e.group, "</span>\n      <span class=\"event__tag\">").concat(e.mood, "</span>\n    </button>");
}
$('prev').addEventListener('click', function () {
  if (weekOffset > -MAX_WEEKS) {
    weekOffset--;
    render();
  }
});
$('next').addEventListener('click', function () {
  if (weekOffset < MAX_WEEKS) {
    weekOffset++;
    render();
  }
});
function closePopup() {
  table.classList.remove('table--picked');
  table.querySelectorAll('.table__day--dance,.table__day--yoga,.table__day--pilates').forEach(function (d) {
    return d.classList.remove('table__day--dance', 'table__day--yoga', 'table__day--pilates');
  });
  var old = document.getElementById('popup');
  if (old) old.remove();
}
table.addEventListener('click', function (ev) {
  var btn = ev.target.closest('.event');
  if (!btn) return;
  var e = EVENTS[Number(btn.dataset.index)];
  var day = getWeek()[e.wd - 1];
  closePopup();
  var params = new URLSearchParams({
    from: 'schedule',
    dir: e.dir,
    title: e.title || DIR_TITLE[e.dir],
    date: iso(day),
    time: "".concat(e.hour, ":00")
  });
  var group = e.group.replace('Взрослая группа', 'Взрослая').replace('Детская группа', 'Детская');
  var popup = document.createElement('div');
  popup.className = 'popup';
  popup.id = 'popup';
  popup.innerHTML = "\n    <div class=\"popup__top\"><div class=\"popup__title\">".concat(e.title || DIR_TITLE[e.dir], "</div><button class=\"popup__close\" type=\"button\" aria-label=\"\u0417\u0430\u043A\u0440\u044B\u0442\u044C\">\xD7</button></div>\n    <div class=\"popup__text\">").concat(day.getDate(), " ").concat(MONTHS_GEN[day.getMonth()], ", ").concat(e.hour, ":00\u2013").concat(e.hour + 1, ":00</div>\n    <div class=\"popup__text\">\u041A\u0430\u0437\u0430\u043D\u0441\u043A\u043E\u0435 \u0448\u043E\u0441\u0441\u0435, 8\u043A2</div>\n    <div class=\"popup__info\">").concat(e.trainer ? "<div class=\"popup__text\">\u0422\u0440\u0435\u043D\u0435\u0440: ".concat(e.trainer, "</div>") : '', "<div class=\"popup__text\">\u0413\u0440\u0443\u043F\u043F\u0430: ").concat(group, "</div></div>\n    <a class=\"popup__btn\" href=\"pages/booking.html?").concat(params, "\">\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F</a>");
  table.appendChild(popup);
  var t = table.getBoundingClientRect();
  var b = btn.getBoundingClientRect();
  var left = Math.min(Math.max(b.left - t.left, 8), t.width - popup.offsetWidth - 8);
  var top = Math.min(b.bottom - t.top + 6, t.height - popup.offsetHeight - 8);
  popup.style.left = left + 'px';
  popup.style.top = Math.max(top, 8) + 'px';
  table.classList.add('table--picked');
  table.querySelectorAll('.table__head .table__day')[e.wd - 1].classList.add('table__day--' + e.dir);
  popup.querySelector('.popup__close').addEventListener('click', closePopup);
});
document.addEventListener('click', function (ev) {
  if (!ev.target.closest('.popup') && !ev.target.closest('.event')) closePopup();
});
document.addEventListener('keydown', function (ev) {
  return ev.key === 'Escape' && closePopup();
});
render();
/******/ })()
;