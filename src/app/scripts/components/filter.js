export function filter() {
  const filter = document.querySelector('.js-filter')
  filter.addEventListener('click', (event) => {
    if (!event.target.closest('.filter__btn')) {
      return
    }
    showAccord(event.target.closest('.js-filter'))
  })
  const showAccord = (el) => {
    el.classList.toggle('visible')
  }
  const accordGroup = document.querySelector('.js-accord-group')
  accordGroup.addEventListener('click', (event) => {
    if (!event.target.closest('.js-accord__btn')) {
      return
    }
    showBody(event.target.closest('.js-accord'))
  })
  const showBody = (el) => {
    el.classList.toggle('active')
  }
}
