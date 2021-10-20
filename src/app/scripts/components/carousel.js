// carousel
export function carousel() {
  const widthView = document.querySelector('.carousel__view').offsetWidth
  const carouselLine = document.querySelector('.carousel__line')
  const btnPrev = document.querySelector('.js-btn-prev')
  console.log('btnPrev', btnPrev)
  const btnNext = document.querySelector('.js-btn-next')
  let slide = 0
  btnNext.addEventListener('click', (event) => {
    if (slide < carouselLine.length) {
      slide += 1
    } else {
      slide = 0
    }
    carouselLine.style.left = -slide * widthView + 'px'
  })
  btnPrev.addEventListener('click', (event) => {
    if (slide > 0) {
      slide -= 1
    } else {
      slide = carouselLine.length - 1
    }
    carouselLine.style.left = -slide * widthView + 'px'
  })
  // active
  const colorItems = document.querySelector('.color')
  colorItems.addEventListener('click', (event) => {
    if (!event.target.closest('.color__item')) {
      return
    }
    activeItem(event.target)
  })
  const activeItem = (el) => {
    el.classList.toggle('active')
  }
  const collections = document.querySelector('.filter__collections')
  collections.addEventListener('click', (event) => {
    if (!event.target.closest('.filter__collection')) {
      return
    }
    activeElem(event.target)
  })
  const activeElem = (el) => {
    el.classList.toggle('active')
  }
  const sizes = document.querySelector('.product__sizes')
  sizes.addEventListener('click', (event) => {
    if (!event.target.closest('.product__size')) {
      return
    }
    activeSize(event.target)
  })
  const activeSize = (el) => {
    el.classList.toggle('active')
  }
}
