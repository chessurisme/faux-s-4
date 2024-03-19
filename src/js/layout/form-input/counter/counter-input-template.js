'use strict'

import { setElementAttributes } from '../../../utilities/set-element-attributes.js'
import { counterInputForm } from './counter-input-icon.js'

/**
 * Generates a template for a form counter.
 *
 * @param {string} type - The type of the form.
 * @returns {HTMLElement} - The generated template.
 */
function formCounterTemplate(type) {
  const form_type = type
  const icon_name = counterInputForm(form_type)

  const template = document.createElement('div')
  setElementAttributes(template, {
    class: 'row',
    id: `${form_type}-template`
  })

  const icon_row = document.createElement('div')
  setElementAttributes(icon_row, {
    class: 'icon-row'
  })

  const icon_for_icon_row = document.createElement('i')
  setElementAttributes(icon_for_icon_row, {
    'data-lucide': `${icon_name}`
  })

  const counter_input_container = document.createElement('div')
  setElementAttributes(counter_input_container, {
    class: 'input counter-input'
  })

  const decrease_button_wrapper = document.createElement('div')
  setElementAttributes(decrease_button_wrapper, {
    class: 'icon-button decrement',
    id: `${form_type}-decrement`
  })

  const decrease_icon = document.createElement('i')
  setElementAttributes(decrease_icon, {
    'data-lucide': 'minus'
  })

  const input_counter = document.createElement('input')
  setElementAttributes(input_counter, {
    type: 'number',
    id: `${form_type}`,
    value: 0
  })

  const increase_button_wrapper = document.createElement('div')
  setElementAttributes(increase_button_wrapper, {
    class: 'icon-button increment',
    id: `${form_type}-increment`
  })

  const increase_icon = document.createElement('i')
  setElementAttributes(increase_icon, {
    'data-lucide': 'plus'
  })

  decrease_button_wrapper.appendChild(decrease_icon)
  increase_button_wrapper.appendChild(increase_icon)

  icon_row.appendChild(icon_for_icon_row)
  counter_input_container.appendChild(decrease_button_wrapper)
  counter_input_container.appendChild(input_counter)
  counter_input_container.appendChild(increase_button_wrapper)

  template.appendChild(icon_row)
  template.appendChild(counter_input_container)

  return template
}

export { formCounterTemplate }
