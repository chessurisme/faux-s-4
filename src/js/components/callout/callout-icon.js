'use strict'

/**
 * Generates an icon based on the provided type.
 *
 * @param {string} type - The type of icon to generate. Must be one of: 'success', 'caution', 'error'.
 * @returns {string|null} - The name of the icon corresponding to the provided type, or null if an invalid type is provided.
 */
function calloutIcon(type) {
  if (!type) {
    console.error('No type is assigned as a parameter for icon!')
    return null
  }

  if (type !== 'success' && type !== 'caution' && type !== 'error') {
    console.error('Invalid assigned parameter for icon!')
    return null
  }

  const icons = {
    success: 'check-circle-2',
    caution: 'alert-triangle',
    error: 'x-square'
  }

  return icons[type]
}

export { calloutIcon }
