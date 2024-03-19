'use strict'

import { createLucideIcons } from '../../utilities/create-lucide-icons.js'
import { calloutRender } from './callout-render.js'

/**
 * Represents a Callout component.
 *
 * @class
 * @constructor
 * @param {Array} event - The event data for the Callout.
 * @param {string} event[0] - The type of the Callout.
 * @param {string} event[1] - The message of the Callout.
 * @param {string} event[2] - The code of the Callout.
 * @param {string} event[3] - The location of the Callout.
 */
class Callout {
  constructor(event) {
    this.event = event
  }

  render() {
    calloutRender(this.event)
    createLucideIcons()

    setTimeout(() => {
      const callout = document.querySelector('.callout')
      callout.remove()
    }, 3000)
  }
}

export { Callout }
