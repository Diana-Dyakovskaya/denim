export const app = () => {
  document.addEventListener('DOMContentLoaded', () => {
    // Твой код
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
    // Double range slider
    const sliderOne = document.getElementById('slider-1')
    const sliderTwo = document.getElementById('slider-2')
    const displayValOne = document.getElementById('range1')
    const displayValTwo = document.getElementById('range2')
    const minGap = 0
    const sliderTrack = document.querySelector('.filter__slider_track')
    const sliderMaxValue = document.getElementById('slider-1').max
    function slideOne() {
      if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap
      }
      displayValOne.textContent = sliderOne.value
      fillColor()
    }
    sliderOne.addEventListener('input', () => {
      slideOne()
    })
    function slideTwo() {
      if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap
      }
      displayValTwo.textContent = sliderTwo.value
      fillColor()
    }
    sliderTwo.addEventListener('input', () => {
      slideTwo()
    })
    function fillColor() {
      const percent1 = (sliderOne.value / sliderMaxValue) * 100
      const percent2 = (sliderTwo.value / sliderMaxValue) * 100
      sliderTrack.style.background = `linear-gradient(to right, #f1f2f4 ${percent1}%, #151C22 ${percent1}%, #151C22 ${percent2}%, #f1f2f4 ${percent2}%)`
    }
    fillColor()
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
  })
}
