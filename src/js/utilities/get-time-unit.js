'use strict'

import { getCurrentYear } from './get-the-year.js'
import { getCurrentMonth } from './get-the-month.js'
import { getCurrentHour } from './get-the-hour.js'

/**
 * Retrieves the specified time unit.
 *
 * @param {string} unit - The time unit to retrieve (year, month, hour).
 * @returns {string|number|boolean} - The value of the specified time unit, or false if the unit is not provided or not supported.
 */
function getTimeUnit(unit) {
  const unit_functions = {
    year: getCurrentYear(),
    month: getCurrentMonth(),
    hour: getCurrentHour()
  }

  if (!unit) {
    console.error('The unit must be provided.')
    return false
  }

  if (!unit_functions[unit]) {
    console.error('The unit provided is not listed on supported time units.')
    return false
  }

  return unit_functions[unit]
}

export { getTimeUnit }
