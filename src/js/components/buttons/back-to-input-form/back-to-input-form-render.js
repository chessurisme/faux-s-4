'use strict'

import { createLucideIcons } from '../../../utilities/create-lucide-icons.js'
import { Buttons } from '../button.js'

function backToInputFormRender() {
  const footer = document.querySelector('footer')
  const back_to_input_form_button = new Buttons(
    'Back',
    'arrow-left',
    'back-to-input-form-button',
    'secondary'
  ).render()

  footer.appendChild(back_to_input_form_button)
  createLucideIcons()
}

export { backToInputFormRender }
