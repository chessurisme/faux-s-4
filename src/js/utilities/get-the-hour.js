'use strict'

/**
 * Returns the current hour as a number.
 * @returns {number} The current hour.
 */
function getCurrentHour() {
  const now = new Date()
  const time_convention_used = 12
  let hours = now.getHours()

  hours = hours % time_convention_used || 12

  return hours
}

export { getCurrentHour }
