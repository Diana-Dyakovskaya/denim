// export function filter() {
//   const filter = document.querySelector('.js-filter')
//   filter.addEventListener('click', (event) => {
//     if (!event.target.closest('.filter__btn')) {
//       return
//     }
//     showAccord(event.target.closest('.js-filter'))
//   })
//   const showAccord = (el) => {
//     el.classList.toggle('visible')
//   }
//   const accordGroup = document.querySelector('.js-accord-group')
//   accordGroup.addEventListener('click', (event) => {
//     if (!event.target.closest('.js-accord__btn')) {
//       return
//     }
//     showBody(event.target.closest('.js-accord'))
//   })
//   const showBody = (el) => {
//     el.classList.toggle('active')
//   }
// }

export class Filter {
  constructor(el) {
    this.$node = el
    this.$accordGroup = el.querySelector('.js-accord-group')

    this.onFilterNodeClick = this.onFilterNodeClick.bind(this)
    this.onAccordGroupClick = this.onAccordGroupClick.bind(this)

    this.setup()
  }

  setup() {
    this.$node.addEventListener('click', this.onFilterNodeClick)
    this.$accordGroup.addEventListener('click', this.onAccordGroupClick)
  }

  onFilterNodeClick(e) {
    if (!e.target.closest('.filter__btn')) return

    this.toggleState(e.target.closest('.js-filter'), 'visible')
  }

  onAccordGroupClick(e) {
    if (!e.target.closest('.js-accord__btn')) return

    this.toggleState(e.target.closest('.js-accord'), 'active')
  }

  toggleState(node, classname) {
    node.classList.toggle(classname)
  }

  static init(el) {
    return el && new Filter(el)
  }
}
