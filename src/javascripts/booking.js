import '../stylesheets/base.css'
import '../stylesheets/prices.css'
import '../stylesheets/booking.css'

const $ = (id) => document.getElementById(id)
const params = new URLSearchParams(window.location.search)

const FORMATS = [
  { id: 'single', name: 'Разовое занятие', price: '600 ₽' },
  { id: 'abon', name: 'Абонемент', price: 'от 2 000 ₽' },
  { id: 'personal', name: 'Индивидуальное занятие', price: '1 700 ₽' },
  { id: 'unknown', name: 'Пока не знаю — подскажите', price: '' },
]
const DIRS = [
  { id: 'dance', name: 'Танцы' },
  { id: 'yoga', name: 'Йога в гамаках' },
  { id: 'pilates', name: 'Пилатес' },
  { id: 'lady', name: 'Lady Style' },
]
const CONTACTS = ['Звонок', 'Telegram', 'ВКонтакте']
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

const PLAN_INFO = {
  a4: { format: 'abon', detail: '4 занятия' },
  a8: { format: 'abon', detail: '8 занятий' },
  a12: { format: 'abon', detail: '12 занятий' },
  a16: { format: 'abon', detail: '16 занятий' },
  unlim: { format: 'abon', detail: 'Безлимитный' },
  single: { format: 'single', detail: '' },
  personal: { format: 'personal', detail: '' },
  wedding: { format: 'unknown', detail: 'Свадебный танец' },
  gift: { format: 'unknown', detail: 'Подарочный сертификат' },
}

let step = 1
let format = 'abon'
let dir = ''
let contact = 'Звонок'
let detail = ''

const plan = PLAN_INFO[params.get('plan')]
if (plan) {
  format = plan.format
  detail = plan.detail
}

if (params.get('date')) {
  format = 'single'
  dir = params.get('dir') || ''
  const [y, m, d] = params.get('date').split('-').map(Number)
  detail = `${params.get('title')}, ${d} ${MONTHS_GEN[m - 1]}, ${params.get('time')}`
}

const backHref = params.get('from') === 'schedule' ? '../index.html' : 'prices.html'
$('close').href = backHref
$('return').href = backHref

function renderStep1() {
  $('options').innerHTML = FORMATS.map(
    (f) => `
    <div class="option${format === f.id ? ' option--on' : ''}" data-id="${f.id}">
      <div class="option__radio"></div>
      <div class="option__name">${f.name}</div>
      <div class="option__price">${f.price}</div>
    </div>`,
  ).join('')
  $('dirs').innerHTML = DIRS.map(
    (d) =>
      `<div class="chip${dir === d.id ? ' chip--active' : ''}" data-id="${d.id}">${d.name}</div>`,
  ).join('')
}
$('options').addEventListener('click', (e) => {
  const item = e.target.closest('.option')
  if (item) {
    format = item.dataset.id
    renderStep1()
  }
})
$('dirs').addEventListener('click', (e) => {
  const chip = e.target.closest('.chip')
  if (chip) {
    dir = dir === chip.dataset.id ? '' : chip.dataset.id
    renderStep1()
  }
})

function renderContacts() {
  $('contact').innerHTML = CONTACTS.map(
    (c) => `<div class="chip${contact === c ? ' chip--active' : ''}" data-id="${c}">${c}</div>`,
  ).join('')
}
$('contact').addEventListener('click', (e) => {
  const chip = e.target.closest('.chip')
  if (chip) {
    contact = chip.dataset.id
    renderContacts()
  }
})

function showStep(n) {
  step = n
  ;[1, 2, 3].forEach((i) => ($('step' + i).hidden = i !== n))

  $('pill').hidden = n === 3
  $('progress').hidden = n === 3
  $('pill').textContent = `Шаг ${n} из 3`
  document
    .querySelectorAll('.progress__bar')
    .forEach((bar, i) => bar.classList.toggle('progress__bar--on', i < n))
  $('modal').scrollIntoView({ block: 'nearest' })
}

function pickedText() {
  const f = FORMATS.find((x) => x.id === format)
  const d = DIRS.find((x) => x.id === dir)
  const parts = [f.id === 'unknown' ? 'Пока не знаю' : f.name]
  if (detail) parts.push(detail)
  if (d && !params.get('date')) parts.push(d.name)
  return parts.join(' · ')
}

$('go2').addEventListener('click', () => {
  $('picked').textContent = pickedText()
  showStep(2)
})
$('back').addEventListener('click', () => showStep(1))

$('send').addEventListener('click', () => {
  const name = $('name').value.trim()
  const phone = $('phone').value.trim()
  const badName = name.length < 2
  const badPhone = phone.replace(/\D/g, '').length < 10
  $('e-name').hidden = !badName
  $('e-phone').hidden = !badPhone
  if (badName || badPhone) return

  try {
    const list = JSON.parse(localStorage.getItem('dfs-requests') || '[]')
    list.push({ what: pickedText(), name, phone, contact, at: new Date().toISOString() })
    localStorage.setItem('dfs-requests', JSON.stringify(list))
  } catch (e) {}
  showStep(3)
})

renderStep1()
renderContacts()
showStep(1)
