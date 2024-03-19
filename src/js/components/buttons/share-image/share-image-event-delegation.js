'use strict'

import { shareImage } from './share-image.js'

function shareImageEventDelegation() {
  const shareButton = document.getElementById('share-image-button')

  shareButton.addEventListener('click', () => {
    shareImage()
  })
}

export { shareImageEventDelegation }
