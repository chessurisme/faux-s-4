'use strict'

import { domtoimage } from 'dom-to-image'

/**
 * Downloads the form as a PNG image.
 *
 * @param {string} [title='form'] - The title of the downloaded image.
 * @returns {void}
 */
function downloadForm(_title) {
  const link = document.createElement('a')
  const title = _title || 'form'
  const form_container = document.getElementById('form-container')

  domtoimage.toPng(form_container).then((data_url) => {
    link.download = `${title}.png`
    link.href = data_url
    link.click()
  })
}

export { downloadForm }
