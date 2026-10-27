import '../stylesheets/base.css'
import '../stylesheets/schedule.css'

const MONTHS_NOM = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
]
const MONTHS_GEN = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
]
const MONTHS_SHORT = [
  'янв',
  'фев',
  'мар',
  'апр',
  'мая',
  'июн',
  'июл',
  'авг',
  'сен',
  'окт',
  'ноя',
  'дек',
]
const DIR_TITLE = { dance: 'Танцы', yoga: 'Йога в гамаках', pilates: 'Пилатес' }

const EVENTS = [
  {
    wd: 7,
    hour: 11,
    dir: 'dance',
    title: 'Lady Style',
    sub: 'Jazz-funk · heels',
    group: 'Взрослая группа',
    mood: 'Зарядиться',
  },
  { wd: 2, hour: 11, dir: 'yoga', trainer: 'Анна', group: 'Взрослая группа', mood: 'Расслабиться' },
  { wd: 5, hour: 11, dir: 'yoga', trainer: 'Анна', group: 'Взрослая группа', mood: 'Расслабиться' },
  { wd: 4, hour: 12, dir: 'dance', trainer: 'Юлия', group: 'Детская группа', mood: 'Повеселиться' },
  { wd: 7, hour: 12, dir: 'dance', trainer: 'Юлия', group: 'Детская группа', mood: 'Повеселиться' },
  {
    wd: 3,
    hour: 13,
    dir: 'yoga',
    trainer: 'Анна',
    group: 'Взрослая группа',
    mood: 'Укрепить спину',
  },
  {
    wd: 6,
    hour: 13,
    dir: 'pilates',
    trainer: 'Елена',
    group: 'Взрослая группа',
    mood: 'Стать сильнее',
  },
  { wd: 2, hour: 14, dir: 'dance', trainer: 'Юлия', group: 'Детская группа', mood: 'Повеселиться' },
  {
    wd: 3,
    hour: 14,
    dir: 'pilates',
    trainer: 'Елена',
    group: 'Взрослая группа',
    roomy: true,
    mood: 'Стать сильнее',
  },
  {
    wd: 6,
    hour: 14,
    dir: 'yoga',
    trainer: 'Анна',
    group: 'Взрослая группа',
    mood: 'Укрепить спину',
  },
  { wd: 1, hour: 15, dir: 'yoga', trainer: 'Анна', group: 'Взрослая группа', mood: 'Расслабиться' },
  { wd: 3, hour: 15, dir: 'dance', trainer: 'Юлия', group: 'Детская группа', mood: 'Повеселиться' },
  {
    wd: 5,
    hour: 15,
    dir: 'pilates',
    trainer: 'Елена',
    group: 'Взрослая группа',
    mood: 'Стать сильнее',
  },
  { wd: 2, hour: 16, dir: 'dance', trainer: 'Юлия', group: 'Подростки', mood: 'Зарядиться' },
  { wd: 6, hour: 16, dir: 'dance', trainer: 'Юлия', group: 'Взрослая группа', mood: 'Зарядиться' },
  {
    wd: 3,
    hour: 17,
    dir: 'pilates',
    trainer: 'Елена',
    group: 'Взрослая группа',
    mood: 'Стать сильнее',
  },
  {
    wd: 4,
    hour: 17,
    dir: 'yoga',
    trainer: 'Анна',
    group: 'Взрослая группа',
    mood: 'Укрепить спину',
  },
]
const HOURS = [11, 12, 13, 14, 15, 16, 17]

const FILTERS = {
  dir: { all: 'Все', options: Object.entries(DIR_TITLE) },
  age: {
    all: 'Все возрасты',
    options: ['Детская группа', 'Подростки', 'Взрослая группа'].map((x) => [x, x]),
  },
  trainer: { all: 'Все преподаватели', options: ['Анна', 'Юлия', 'Елена'].map((x) => [x, x]) },
  mood: {
    all: 'Все',
    options: ['Стать сильнее', 'Укрепить спину', 'Расслабиться', 'Зарядиться', 'Повеселиться'].map(
      (x) => [x, x],
    ),
  },
}
const selected = { dir: '', age: '', trainer: '', mood: '' }

const $ = (id) => document.getElementById(id)
const table = $('table')
let weekOffset = 0
const MAX_WEEKS = 2

const pad = (n) => String(n).padStart(2, '0')
const iso = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`

function getWeek() {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  d.setDate(d.getDate() - ((d.getDay() || 7) - 1) + weekOffset * 7)
  return Array.from({ length: 7 }, (_, i) => {
    const day = new Date(d)
    day.setDate(d.getDate() + i)
    return day
  })
}

const matches = (e) =>
  (!selected.dir || e.dir === selected.dir) &&
  (!selected.age || e.group === selected.age) &&
  (!selected.trainer || e.trainer === selected.trainer) &&
  (!selected.mood || e.mood === selected.mood)

function closeMenus() {
  document.querySelectorAll('.filter__menu').forEach((m) => (m.hidden = true))
  document
    .querySelectorAll('.filter__field--open')
    .forEach((f) => f.classList.remove('filter__field--open'))
}
for (const [key, cfg] of Object.entries(FILTERS)) {
  const menu = $('f-' + key)
  const field = menu.parentElement

  const draw = () => {
    menu.innerHTML = [['', cfg.all], ...cfg.options]
      .map(
        ([value, label]) =>
          `<div class="filter__option${selected[key] === value ? ' filter__option--on' : ''}" data-value="${value}">${label}</div>`,
      )
      .join('')
  }
  draw()

  field.addEventListener('click', (ev) => {
    const option = ev.target.closest('.filter__option')
    if (option) {
      selected[key] = option.dataset.value
      $('v-' + key).textContent = option.textContent
      draw()
      closeMenus()
      render()
      return
    }
    const wasOpen = !menu.hidden
    closeMenus()
    menu.hidden = wasOpen
    field.classList.toggle('filter__field--open', !wasOpen)
  })
}
document.addEventListener('click', (ev) => {
  if (!ev.target.closest('.filter__field')) closeMenus()
})

function render() {
  closePopup()
  const week = getWeek()
  const today = iso(new Date())

  const first = week[0]
  const last = week[6]
  $('month').textContent =
    first.getMonth() === last.getMonth()
      ? MONTHS_NOM[first.getMonth()]
      : `${MONTHS_NOM[first.getMonth()]} — ${MONTHS_NOM[last.getMonth()]}`
  $('range').textContent =
    first.getMonth() === last.getMonth()
      ? `Неделя ${first.getDate()}–${last.getDate()} ${MONTHS_GEN[last.getMonth()]}`
      : `Неделя ${first.getDate()} ${MONTHS_GEN[first.getMonth()]} – ${last.getDate()} ${MONTHS_GEN[last.getMonth()]}`

  $('prev').disabled = weekOffset <= -MAX_WEEKS
  $('next').disabled = weekOffset >= MAX_WEEKS

  let html = '<div class="table__row table__head"><div class="table__corner">Время</div>'
  html += week
    .map(
      (d) =>
        `<div class="table__day${iso(d) === today ? ' table__day--today' : ''}">${d.getDate()} ${MONTHS_SHORT[d.getMonth()]}</div>`,
    )
    .join('')
  html += '</div>'

  for (const hour of HOURS) {
    html += `<div class="table__row"><div class="table__time">${hour}:00</div>`
    for (let wd = 1; wd <= 7; wd++) {
      const e = EVENTS.find((x) => x.wd === wd && x.hour === hour)
      html += '<div class="table__cell">' + (e ? eventHtml(e, EVENTS.indexOf(e)) : '') + '</div>'
    }
    html += '</div>'
  }
  table.innerHTML = html
}

function eventHtml(e, index) {
  const cls = [
    'event',
    'event--' + e.dir,
    e.roomy ? 'event--roomy' : '',
    matches(e) ? '' : 'event--off',
  ].join(' ')
  return `<button class="${cls}" type="button" data-index="${index}">
      <span class="event__title">${e.title || DIR_TITLE[e.dir]}</span>
      ${e.sub ? `<span class="event__text">${e.sub}</span>` : ''}
      ${e.trainer ? `<span class="event__text">Тренер: ${e.trainer}</span>` : ''}
      <span class="event__text">${e.group}</span>
      <span class="event__tag">${e.mood}</span>
    </button>`
}

$('prev').addEventListener('click', () => {
  if (weekOffset > -MAX_WEEKS) {
    weekOffset--
    render()
  }
})
$('next').addEventListener('click', () => {
  if (weekOffset < MAX_WEEKS) {
    weekOffset++
    render()
  }
})

function closePopup() {
  table.classList.remove('table--picked')
  table
    .querySelectorAll('.table__day--dance,.table__day--yoga,.table__day--pilates')
    .forEach((d) =>
      d.classList.remove('table__day--dance', 'table__day--yoga', 'table__day--pilates'),
    )
  const old = document.getElementById('popup')
  if (old) old.remove()
}

table.addEventListener('click', (ev) => {
  const btn = ev.target.closest('.event')
  if (!btn) return
  const e = EVENTS[Number(btn.dataset.index)]
  const day = getWeek()[e.wd - 1]
  closePopup()

  const params = new URLSearchParams({
    from: 'schedule',
    dir: e.dir,
    title: e.title || DIR_TITLE[e.dir],
    date: iso(day),
    time: `${e.hour}:00`,
  })
  const group = e.group.replace('Взрослая группа', 'Взрослая').replace('Детская группа', 'Детская')

  const popup = document.createElement('div')
  popup.className = 'popup'
  popup.id = 'popup'
  popup.innerHTML = `
    <div class="popup__top"><div class="popup__title">${e.title || DIR_TITLE[e.dir]}</div><button class="popup__close" type="button" aria-label="Закрыть">×</button></div>
    <div class="popup__text">${day.getDate()} ${MONTHS_GEN[day.getMonth()]}, ${e.hour}:00–${e.hour + 1}:00</div>
    <div class="popup__text">Казанское шоссе, 8к2</div>
    <div class="popup__info">${e.trainer ? `<div class="popup__text">Тренер: ${e.trainer}</div>` : ''}<div class="popup__text">Группа: ${group}</div></div>
    <a class="popup__btn" href="pages/booking.html?${params}">Записаться</a>`
  table.appendChild(popup)

  const t = table.getBoundingClientRect()
  const b = btn.getBoundingClientRect()
  const left = Math.min(Math.max(b.left - t.left, 8), t.width - popup.offsetWidth - 8)
  const top = Math.min(b.bottom - t.top + 6, t.height - popup.offsetHeight - 8)
  popup.style.left = left + 'px'
  popup.style.top = Math.max(top, 8) + 'px'

  table.classList.add('table--picked')
  table.querySelectorAll('.table__head .table__day')[e.wd - 1].classList.add('table__day--' + e.dir)
  popup.querySelector('.popup__close').addEventListener('click', closePopup)
})

document.addEventListener('click', (ev) => {
  if (!ev.target.closest('.popup') && !ev.target.closest('.event')) closePopup()
})
document.addEventListener('keydown', (ev) => ev.key === 'Escape' && closePopup())

render()
