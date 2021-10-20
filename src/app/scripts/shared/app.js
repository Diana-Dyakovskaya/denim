import { carousel } from '@app/components/carousel'
import { rangeSlider } from '@app/components/range-slider'
import { filter } from '@app/components/filter'

export const app = () => {
  document.addEventListener('DOMContentLoaded', () => {
    // Твой код

    filter()
    rangeSlider()
    carousel()
  })
}
