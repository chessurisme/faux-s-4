'use strict'

import { dataGet } from '../../../data/data_get.js'
import { createFormInitializer } from '../../../integrations/create-form-initializer.js'

/**
 * Function to handle event delegation for the create form button.
 *
 * @returns {void}
 */
function createFormEventDelegation() {
  const createFormButton = document.getElementById('create-form-button')

  if (!createFormButton) {
    return false
  }

  createFormButton.addEventListener('click', () => {
    const is_successful = dataGet()

    if (is_successful) {
      createFormInitializer()
    }
  })
}

export { createFormEventDelegation }
