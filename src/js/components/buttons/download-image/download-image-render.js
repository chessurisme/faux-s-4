'use strict'

import { createLucideIcons } from '../../../utilities/create-lucide-icons.js'
import { Buttons } from '../button.js'

function downloadImageRender() {
  const footer = document.querySelector('footer')
  const download_image_button = new Buttons(
    'Download',
    'image-down',
    'download-image-button',
    'secondary'
  ).render()

  footer.appendChild(download_image_button)
  createLucideIcons()
}

export { downloadImageRender }
