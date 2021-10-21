import { Carousel, Color, Collection, Size } from '@app/components/carousel'
import { Slider } from '@app/components/range-slider'
import { Filter } from '@app/components/filter'

export const app = () => {
  document.addEventListener('DOMContentLoaded', () => {
    // Твой код

    document.querySelectorAll('.js-filter').forEach((filter) => {
      Filter.init(filter)
    })

    document.querySelectorAll('.js-slider').forEach((slider) => {
      Slider.init(slider)
    })

    document.querySelectorAll('.js-carousel').forEach((carousel) => {
      Carousel.init(carousel)
    })

    document.querySelectorAll('.color').forEach((color) => {
      Color.init(color)
    })

    document.querySelectorAll('.filter__collections').forEach((collection) => {
      Collection.init(collection)
    })

    document.querySelectorAll('.product__sizes').forEach((size) => {
      Size.init(size)
    })

    // rangeSlider()
    // carousel()
  })
}
