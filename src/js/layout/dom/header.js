'use strict'

import { createLucideIcons } from '../../utilities/create-lucide-icons'

/**
 * Shows the header by populating its inner HTML.
 * Gets the header element and defines a template string
 * containing the header content. Sets the innerHTML
 * property of the header to the template string.
 */
function showHeader() {
  const header = document.querySelector('header')

  const template = `
    <p>Faux S-4</p>
    <div class='icon-button' id='switch-theme-button'>
      <i data-lucide='sun-moon'></i>
    </div>
  `

  header.innerHTML = template
  createLucideIcons()
}

export { showHeader }
