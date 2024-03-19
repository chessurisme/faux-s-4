'use strict'

/**
 * CounterButtons class represents a set of buttons that can be used to increment or decrement a counter value.
 *
 * @class
 * @constructor
 * @param {string} type - The type of counter.
 */
class CounterButtons {
  constructor(type) {
    this.type = type
  }

  increment() {
    const number_container = document.getElementById(this.type)

    if (number_container.value == '' || number_container.value == null) {
      number_container.value = 0
    }

    number_container.value = parseInt(number_container.value) + 1
    localStorage.setItem(this.type, number_container.value)
  }

  decrement() {
    const number_container = document.getElementById(this.type)
    const current_value = parseInt(number_container.value)

    if (number_container.value == '' || number_container.value == null) {
      number_container.value = 0
    }

    if (current_value > 0) {
      number_container.value = current_value - 1
    }

    localStorage.setItem(this.type, number_container.value)
  }
}

export { CounterButtons }
