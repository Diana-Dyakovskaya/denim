export class Scroll {
  constructor(el) {
    this.$btnArrow = el.querySelector('.intro__arrow')
    this.$viewElem = el.querySelector('.home__best')
    this.actionBtn()
  }

  actionBtn() {
    this.$btnArrow.addEventListener('click', () => {
      this.$viewElem.scrollIntoView(true)
    })
  }

  static init(el) {
    return el && new Scroll(el)
  }
}
