// carousel
export class Carousel {
  constructor(el) {
    this.$widthView = el.querySelector('.carousel__view').offsetWidth
    this.$carouselLine = el.querySelector('.carousel__line')
    this.$btnPrev = el.querySelector('.js-btn-prev')
    this.$btnNext = el.querySelector('.js-btn-next')
    this.slide = 0
    this.actionNext()
    this.actionPrev()
  }

  actionNext() {
    this.$btnNext.addEventListener('click', (event) => {
      if (this.slide < this.$carouselLine.length) {
        this.slide += 1
      } else {
        this.slide = 0
      }
      this.$carouselLine.style.left = -this.slide * this.$widthView + 'px'
    })
  }

  actionPrev() {
    this.$btnPrev.addEventListener('click', (event) => {
      if (this.slide > 0) {
        this.slide -= 1
      } else {
        this.slide = this.$carouselLine.length - 1
      }
      this.$carouselLine.style.left = -this.slide * this.$widthView + 'px'
    })
  }

  static init(el) {
    return el && new Carousel(el)
  }
}

export class Color {
  constructor(el) {
    this.$colorItems = el
    this.choiceItem()
  }

  choiceItem() {
    this.$colorItems.addEventListener('click', (event) => {
      if (!event.target.closest('.color__item')) {
        return
      }
      event.target.classList.toggle('active')
    })
  }

  static init(el) {
    return el && new Color(el)
  }
}

export class Collection {
  constructor(el) {
    this.$collections = el
    this.choiceCollection()
  }

  choiceCollection() {
    this.$collections.addEventListener('click', (event) => {
      if (!event.target.closest('.filter__collection')) {
        return
      }
      event.target.classList.toggle('active')
    })
  }

  static init(el) {
    return el && new Collection(el)
  }
}

export class Size {
  constructor(el) {
    this.$sizes = el
    this.choiceSize()
  }

  choiceSize() {
    this.$sizes.addEventListener('click', (event) => {
      if (!event.target.closest('.product__size')) {
        return
      }
      event.target.classList.toggle('active')
    })
  }

  static init(el) {
    return el && new Size(el)
  }
}

// export function carousel() {
//   // active
//   const colorItems = document.querySelector('.color')
//   colorItems.addEventListener('click', (event) => {
//     if (!event.target.closest('.color__item')) {
//       return
//     }
//     activeItem(event.target)
//   })
//   const activeItem = (el) => {
//     el.classList.toggle('active')
//   }
//   const collections = document.querySelector('.filter__collections')
//   collections.addEventListener('click', (event) => {
//     if (!event.target.closest('.filter__collection')) {
//       return
//     }
//     activeElem(event.target)
//   })
//   const activeElem = (el) => {
//     el.classList.toggle('active')
//   }
//   const sizes = document.querySelector('.product__sizes')
//   sizes.addEventListener('click', (event) => {
//     if (!event.target.closest('.product__size')) {
//       return
//     }
//     activeSize(event.target)
//   })
//   const activeSize = (el) => {
//     el.classList.toggle('active')
//   }
//   //carousel
//   const widthView = document.querySelector('.carousel__view').offsetWidth
//   const carouselLine = document.querySelector('.carousel__line')
//   const btnPrev = document.querySelector('.js-btn-prev')
//   const btnNext = document.querySelector('.js-btn-next')
//   let slide = 0
//   btnNext.addEventListener('click', (event) => {
//     if (slide < carouselLine.length) {
//       slide += 1
//     } else {
//       slide = 0
//     }
//     carouselLine.style.left = -slide * widthView + 'px'
//   })
//   btnPrev.addEventListener('click', (event) => {
//     if (slide > 0) {
//       slide -= 1
//     } else {
//       slide = carouselLine.length - 1
//     }
//     carouselLine.style.left = -slide * widthView + 'px'
//   })
// }
