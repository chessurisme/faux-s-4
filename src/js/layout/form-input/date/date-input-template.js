'use strict'

import { getTimeUnit } from '../../../utilities/get-time-unit.js'
import { setElementAttributes } from '../../../utilities/set-element-attributes.js'

function formDateTemplate() {
  const template = document.createElement('div')
  setElementAttributes(template, {
    class: 'row',
    id: 'date-template'
  })

  const icon_row = document.createElement('div')
  setElementAttributes(icon_row, {
    class: 'icon-row'
  })

  const icon_for_icon_row = document.createElement('i')
  setElementAttributes(icon_for_icon_row, {
    'data-lucide': 'calendar'
  })

  const date_input_container = document.createElement('div')
  setElementAttributes(date_input_container, {
    class: 'input date-input'
  })

  const previous_date_button_wrapper = document.createElement('div')
  setElementAttributes(previous_date_button_wrapper, {
    class: 'icon-button previous-date',
    id: 'previous-date'
  })

  const previous_date_icon = document.createElement('i')
  setElementAttributes(previous_date_icon, {
    'data-lucide': 'chevron-left'
  })

  const date_input = document.createElement('p')
  const month = getTimeUnit('month')
  const year = getTimeUnit('year')
  date_input.textContent = `${month} ${year}`
  setElementAttributes(date_input, {
    id: 'date'
  })

  const next_date_button_wrapper = document.createElement('div')
  setElementAttributes(next_date_button_wrapper, {
    class: 'icon-button next-date',
    id: 'next-date'
  })

  const next_date_icon = document.createElement('i')
  setElementAttributes(next_date_icon, {
    'data-lucide': 'chevron-right'
  })

  previous_date_button_wrapper.appendChild(previous_date_icon)
  next_date_button_wrapper.appendChild(next_date_icon)

  icon_row.appendChild(icon_for_icon_row)
  date_input_container.appendChild(previous_date_button_wrapper)
  date_input_container.appendChild(date_input)
  date_input_container.appendChild(next_date_button_wrapper)

  template.appendChild(icon_row)
  template.appendChild(date_input_container)

  return template
}

export { formDateTemplate }
