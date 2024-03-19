'use strict'

import { loadRender } from './load-render.js'
import { loadChooseIcon } from './load-icons.js'
import { loadMessages } from './load-messages.js'
import { loadHide } from './load-hide.js'

/**
 * Represents a loading screen.
 *
 * @class
 * @constructor
 * @param {string} event - The event type for the loading screen.
 * @property {string} event - The event type for the loading screen.
 * @property {string} iconName - The name of the icon to be displayed on the loading screen.
 * @property {number} time - The time in milliseconds before the loading screen is hidden.
 * @property {string} message - The message to be displayed on the loading screen.
 */
class LoadScreen {
  constructor(event) {
    this.event = event
    this.iconName = loadChooseIcon()
    this.time = [2000, 2500, 3000, 3500, 4000, 45000, 5000][
      Math.floor(Math.random() * 4)
    ]
    this.message = loadMessages(event)
  }

  render() {
    loadRender(this.iconName, this.message)
  }

  hide() {
    setTimeout(() => {
      loadHide()
    }, this.time)

    console.log(this.time)
  }
}

export { LoadScreen }
