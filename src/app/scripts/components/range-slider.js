export class Slider {
  constructor(el) {
    this.$sliderOne = el.querySelector('#slider-1')
    this.$sliderTwo = el.querySelector('#slider-2')
    this.$displayValOne = el.querySelector('#range1')
    this.$displayValTwo = el.querySelector('#range2')
    this.minGap = 0
    this.$sliderTrack = el.querySelector('.filter__slider_track')
    this.$sliderMaxValue = el.querySelector('#slider-1').max
    this.slideOne = this.slideOne.bind(this)
    this.slideTwo = this.slideTwo.bind(this)
    this.sliderAction()
    this.fillColor()
  }

  sliderAction() {
    this.$sliderOne.addEventListener('input', this.slideOne)
    this.$sliderTwo.addEventListener('input', this.slideTwo)
  }

  slideOne() {
    if (parseInt(this.$sliderTwo.value) - parseInt(this.$sliderOne.value) <= this.minGap) {
      this.$sliderOne.value = parseInt(this.$sliderTwo.value) - this.minGap
    }
    this.$displayValOne.textContent = this.$sliderOne.value
    this.fillColor()
  }

  slideTwo() {
    if (parseInt(this.$sliderTwo.value) - parseInt(this.$sliderOne.value) <= this.minGap) {
      this.$sliderTwo.value = parseInt(this.$sliderOne.value) + this.minGap
    }
    this.$displayValTwo.textContent = this.$sliderTwo.value
    this.fillColor()
  }

  fillColor() {
    const percent1 = (this.$sliderOne.value / this.$sliderMaxValue) * 100
    const percent2 = (this.$sliderTwo.value / this.$sliderMaxValue) * 100
    this.$sliderTrack.style.background = `linear-gradient(to right, #f1f2f4 ${percent1}%, #151C22 ${percent1}%, #151C22 ${percent2}%, #f1f2f4 ${percent2}%)`
  }

  static init(el) {
    return el && new Slider(el)
  }
}

// Double range slider
// const sliderOne = document.getElementById('slider-1')
// const sliderTwo = document.getElementById('slider-2')
// const displayValOne = document.getElementById('range1')
// const displayValTwo = document.getElementById('range2')
// const minGap = 0
// const sliderTrack = document.querySelector('.filter__slider_track')
// const sliderMaxValue = document.getElementById('slider-1').max
//
// function slideOne() {
//   if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
//     sliderOne.value = parseInt(sliderTwo.value) - minGap
//   }
//   displayValOne.textContent = sliderOne.value
//   fillColor()
// }
//
// sliderOne.addEventListener('input', () => {
//   slideOne()
// })
//
// function slideTwo() {
//   if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
//     sliderTwo.value = parseInt(sliderOne.value) + minGap
//   }
//   displayValTwo.textContent = sliderTwo.value
//   fillColor()
// }
//
// sliderTwo.addEventListener('input', () => {
//   slideTwo()
// })
//
// function fillColor() {
//   const percent1 = (sliderOne.value / sliderMaxValue) * 100
//   const percent2 = (sliderTwo.value / sliderMaxValue) * 100
//   sliderTrack.style.background = `linear-gradient(to right, #f1f2f4 ${percent1}%, #151C22 ${percent1}%, #151C22 ${percent2}%, #f1f2f4 ${percent2}%)`
// }
//
// fillColor()
