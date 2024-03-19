'use strict'

function setStyle(element, style) {
  if (!(element instanceof HTMLElement)) {
    console.error('The first argument must be an element')
    return null
  }

  if (typeof style !== 'object' || style === null) {
    console.error('The second argument must be an object')
    return null
  }

  Object.assign(element.style, style)
}

export { setStyle }
