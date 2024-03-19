'use strict'

import { setElementAttributes } from '../../utilities/set-element-attributes'

class Buttons {
  constructor(label, icon_name, id, type) {
    this.label = label
    this.icon_name = icon_name
    this.id = id
    this.type = type
  }

  render() {
    const button_wrapper = document.createElement('div')
    setElementAttributes(button_wrapper, {
      id: this.id,
      class: `button ${this.type}`
    })

    const button_icon_wrapper = document.createElement('div')
    setElementAttributes(button_icon_wrapper, {
      class: 'button-icon-wrapper'
    })

    const button_icon = document.createElement('i')
    setElementAttributes(button_icon, {
      'data-lucide': this.icon_name
    })

    const button_label = document.createElement('p')
    setElementAttributes(button_label, {
      class: 'button-label'
    })
    button_label.innerText = this.label

    button_icon_wrapper.appendChild(button_icon)
    button_wrapper.appendChild(button_icon_wrapper)
    button_wrapper.appendChild(button_label)

    return button_wrapper
  }
}

export { Buttons }
