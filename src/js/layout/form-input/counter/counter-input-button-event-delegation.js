'use strict'

import { CounterButtons } from './counter-input-buttons.js'

/**
 * Handles event delegation for counter buttons.
 *
 * This function attaches event listeners to the decrement and increment buttons
 * within the counter input elements. When a button is clicked, it checks if the
 * button's ID includes the specified type. If it does, it creates a new instance
 * of the CounterButtons class with the specified type and calls the corresponding
 * decrement or increment method.
 *
 * @param {string} type - The type of counter buttons to handle events for.
 * @returns {void}
 */
function counterButtonsEventDelegation(type) {
  const counterInputs = document.querySelectorAll('.counter-input')

  for (const counterInput of counterInputs) {
    const decrement_buttons = counterInput.getElementsByClassName('decrement')
    const increment_buttons = counterInput.getElementsByClassName('increment')

    for (const decrement_button of decrement_buttons) {
      decrement_button.addEventListener('click', () => {
        if (decrement_button.id.includes(type)) {
          new CounterButtons(type).decrement()
        }
      })
    }

    for (const increment_button of increment_buttons) {
      increment_button.addEventListener('click', () => {
        if (increment_button.id.includes(type)) {
          new CounterButtons(type).increment()
        }
      })
    }
  }
}

export { counterButtonsEventDelegation }
