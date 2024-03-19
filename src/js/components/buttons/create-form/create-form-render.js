'use strict'

import { createLucideIcons } from '../../../utilities/create-lucide-icons'
import { Buttons } from '../button'

/**
 * Creates and renders a form button.
 *
 * @returns {HTMLElement} The rendered form button element.
 */
function createFormRender() {
  const footer = document.querySelector('footer')
  const create_form_button = new Buttons(
    'Create Form',
    'file-input',
    'create-form-button',
    'primary'
  ).render()

  footer.appendChild(create_form_button)
  createLucideIcons()
}

export { createFormRender }
