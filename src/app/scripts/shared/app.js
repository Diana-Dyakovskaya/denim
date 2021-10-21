import { carousel } from '@app/components/carousel'
import { rangeSlider } from '@app/components/range-slider'
import { Filter } from '@app/components/filter'

export const app = () => {
  document.addEventListener('DOMContentLoaded', () => {
    // Твой код

    document.querySelectorAll('.js-filter').forEach((filter) => {
      Filter.init(filter)
    })

    // rangeSlider()
    // carousel()
  })
}
