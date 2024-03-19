'use strict'

import { createLucideIcons } from '../../utilities/create-lucide-icons.js'

/**
 * Renders a loading screen with the provided icon name and message.
 *
 * @param {string} iconName - Name of the icon to display
 * @param {string} message - Loading message to display
 * @returns {boolean} - true if rendered successfully
 */
function loadRender(iconName, message) {
  const body = document.body
  const template = `
    <div id='loading-screen'>
      <div class='icon'>
        <i data-lucide='${iconName}'></i>      
      </div>  
    
      <p class='loading-message'>${message}</p>
    </div>
  `

  body.innerHTML += template
  createLucideIcons()
  return true
}

export { loadRender }
