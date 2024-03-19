'use strict'

import { getTimeUnit } from '../../../utilities/get-time-unit.js'

/**
 * Generates a counter input form based on the provided form type.
 *
 * @param {string} form_type - The type of form to generate. Must be either 'bible-study' or 'hours'.
 * @returns {string|null} - The generated form or null if the form type is invalid.
 */
function counterInputForm(form_type) {
  if (form_type !== 'bible-study' && form_type !== 'hours') {
    return null
  }

  if (form_type === 'bible-study') {
    return 'users-round'
  }

  const current_hour = getTimeUnit('hour')
  return `clock-${current_hour}`
}

export { counterInputForm }
