'use strict'

import { createLucideIcons } from '../../../utilities/create-lucide-icons.js'
import { Buttons } from '../button.js'

function shareImageRender() {
  const footer = document.querySelector('footer')
  const share_image_button = new Buttons(
    'Share',
    'share',
    'share-image-button',
    'primary'
  ).render()

  footer.appendChild(share_image_button)
  createLucideIcons()
}

export { shareImageRender }
