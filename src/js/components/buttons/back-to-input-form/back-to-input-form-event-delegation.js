'use strict'

import { backToFormInitializer } from '../../../integrations/back-to-form-initializer.js'

function backToInputFormEventDelegation() {
  const back_to_input_form_button = document.getElementById(
    'back-to-input-form-button'
  )

  back_to_input_form_button.addEventListener('click', () => {
    backToFormInitializer()
  })
}

export { backToInputFormEventDelegation }
