'use strict'

import { setElementAttributes } from '../../../utilities/set-element-attributes.js'

/**
 * Creates a text input template for a form.
 *
 * @returns {HTMLElement} The created template element.
 */
function formTextTemplate() {
  const template = document.createElement('div')
  setElementAttributes(template, {
    class: 'row',
    id: 'text-template'
  })

  const icon_row = document.createElement('div')
  setElementAttributes(icon_row, {
    class: 'icon-row'
  })

  const icon_for_icon_row = document.createElement('i')
  setElementAttributes(icon_for_icon_row, {
    'data-lucide': 'user-round'
  })

  const text_input_container = document.createElement('div')
  setElementAttributes(text_input_container, {
    class: 'input text-input'
  })

  const text_input = document.createElement('input')
  setElementAttributes(text_input, {
    id: 'name',
    type: 'text',
    placeholder: 'Name'
  })

  icon_row.appendChild(icon_for_icon_row)
  text_input_container.appendChild(text_input)

  template.appendChild(icon_row)
  template.appendChild(text_input_container)

  return template
}

export { formTextTemplate }
