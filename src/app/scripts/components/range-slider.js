export function rangeSlider() {
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
}
