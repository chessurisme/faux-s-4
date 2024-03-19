'use strict'

/**
 * Returns the current year as a number.
 *
 * @returns {number} The current year.
 */
function getCurrentYear() {
  const now = new Date()
  return now.getFullYear()
}

export { getCurrentYear }
