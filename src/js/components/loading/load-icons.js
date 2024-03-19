'use strict'

/**
 * Randomly selects an icon name from a predefined list.
 *
 * @returns {string} A random icon name.
 */
function loadChooseIcon() {
  const icons = [
    'loader',
    'rotate-ccw',
    'clock-1',
    'clock-2',
    'clock-3',
    'clock-4',
    'clock-5',
    'clock-6',
    'clock-7',
    'clock-8',
    'clock-9',
    'clock-10',
    'clock-11',
    'clock-12',
    'hourglass',
    'laugh'
  ]

  return icons[Math.floor(Math.random() * icons.length)]
}

export { loadChooseIcon }
