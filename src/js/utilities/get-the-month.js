'use strict'

/**
 * Returns the current month as a string.
 * @returns {string} The current month.
 */
function getCurrentMonth() {
  const now = new Date()
  return now.toLocaleString('default', { month: 'long' })
}

export { getCurrentMonth }
