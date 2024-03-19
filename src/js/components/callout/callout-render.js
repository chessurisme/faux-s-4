'use strict'

import { setElementAttributes } from '../../utilities/set-element-attributes.js'
import { calloutIcon } from './callout-icon.js'

function calloutRender(event) {
  const type = event[0]
  const message = event[1]
  const code = event[2]
  // const location = event[3]
  const icon = calloutIcon(type)

  const body = document.querySelector('body')

  const callout = document.createElement('div')
  setElementAttributes(callout, {
    class: `callout callout-${type}`
  })

  const callout_icon_wrapper = document.createElement('div')
  setElementAttributes(callout_icon_wrapper, {
    class: 'callout-icon'
  })

  const callout_icon = document.createElement('i')
  setElementAttributes(callout_icon, {
    'data-lucide': icon
  })

  const callout_message = document.createElement('div')
  callout_message.textContent = message
  setElementAttributes(callout_message, {
    class: 'callout-message'
  })

  const callout_code = document.createElement('div')
  callout_code.textContent = code
  setElementAttributes(callout_code, {
    class: 'callout-code'
  })

  callout_icon_wrapper.appendChild(callout_icon)

  callout.appendChild(callout_icon_wrapper)
  callout.appendChild(callout_message)
  callout.appendChild(callout_code)

  const existing_callouts = document.querySelectorAll('.callout')
  const bottom_position =
    40 + existing_callouts.length * (callout.offsetHeight + 70)
  callout.style.bottom = `${bottom_position}px`
  callout.style.right = '40px'

  body.appendChild(callout)
}

export { calloutRender }
