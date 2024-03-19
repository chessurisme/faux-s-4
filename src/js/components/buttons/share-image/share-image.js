'use strict'

import domtoimage from 'dom-to-image'

async function shareImage() {
  const form = document.getElementById('form')

  try {
    const dataUrl = await domtoimage.toPng(form)
    const blob = dataURItoBlob(dataUrl)
    const file = new File([blob], 'image.png', { type: blob.type })

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title: 'Field Service Report',
          text: 'This is your report!'
        })
        console.log('Image shared successfully!')
      } catch (error) {
        console.error('Error sharing image:', error)
      }
    } else {
      console.warn(
        'Web Share API is not supported on this device or sharing these files is not possible.'
      )
    }
  } catch (error) {
    console.error('Error converting form to image:', error)
  }
}

function dataURItoBlob(dataURI) {
  const byteString = atob(dataURI.split(',')[1])
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
  const arrayBuffer = new ArrayBuffer(byteString.length)
  const uint8Array = new Uint8Array(arrayBuffer)

  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i)
  }

  return new Blob([uint8Array], { type: mimeString })
}

export { shareImage }
