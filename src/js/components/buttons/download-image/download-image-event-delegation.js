'use strict'

import { downloadImage } from './download-image.js'

function downloadImageEventDelegation() {
  const download_image_button = document.getElementById('download-image-button')

  if (!download_image_button) {
    return false
  }

  download_image_button.addEventListener('click', () => {
    downloadImage()
  })
}

export { downloadImageEventDelegation }
