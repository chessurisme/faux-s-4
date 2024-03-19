'use strict'

import { PrivacyAndConcernScreen } from './privacy-and-concern'

/**
 * Checks if the user has clicked the "Done Reading" button to indicate
 * they have finished reading the privacy and concern information.
 *
 * @returns {boolean} True if the user has clicked the button, false otherwise.
 */
function isDoneReading() {
  const button = document.getElementById('done-read-pac')

  if (button) {
    button.addEventListener('click', () => {
      localStorage.setItem('isRead', true)
      new PrivacyAndConcernScreen().remove()
      return true
    })
  }

  return false
}

export { isDoneReading }
