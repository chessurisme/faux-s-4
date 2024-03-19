'use strict'

import { setElementAttributes } from '../../../utilities/set-element-attributes.js'

function formTextareaTemplate() {
  const template = document.createElement('div')
  setElementAttributes(template, {
    class: 'row',
    id: 'textarea-template'
  })

  const icon_row = document.createElement('div')
  setElementAttributes(icon_row, {
    class: 'icon-row'
  })

  const icon_for_icon_row = document.createElement('i')
  setElementAttributes(icon_for_icon_row, {
    'data-lucide': 'message-circle-more'
  })

  const textarea_input_container = document.createElement('div')
  setElementAttributes(textarea_input_container, {
    class: 'input textarea-input'
  })

  const textarea_input = document.createElement('textarea')
  setElementAttributes(textarea_input, {
    id: 'comments',
    class: 'textarea-input',
    placeholder: 'Add your comment here...'
  })

  icon_row.appendChild(icon_for_icon_row)
  textarea_input_container.appendChild(textarea_input)

  template.appendChild(icon_row)
  template.appendChild(textarea_input_container)

  return template
}

export { formTextareaTemplate }
