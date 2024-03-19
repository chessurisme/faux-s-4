'use strict'

/**
 * Sets attributes on an HTML element.
 * @param {HTMLElement} element - The HTML element to set attributes on.
 * @param {Object} attributes - An object containing attribute-value pairs.
 * @returns {boolean} - Returns true if successful, false otherwise.
 */
function setElementAttributes(element, attributes) {
  if (!element) {
    console.error('The element must be provided.')
    return false
  }

  if (!attributes || Object.keys(attributes).length === 0) {
    console.error('The attributes must be provided.')
    return false
  }

  if (!(element instanceof HTMLElement)) {
    const not_valid_element =
      'The element provided is not a valid HTML element.'
    console.error(not_valid_element)
    return false
  }

  if (typeof attributes !== 'object') {
    const not_valid_attributes =
      'The attributes provided are not a valid object.'
    console.error(not_valid_attributes)
    return false
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })

  return true
}

export { setElementAttributes }
