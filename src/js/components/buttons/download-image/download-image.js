'use strict'

import domtoimage from 'dom-to-image'

function downloadImage() {
  const data = localStorage.getItem('data')
  const date = JSON.parse(data)[1]

  const link = document.createElement('a')
  const title = date || 'form'
  const form = document.getElementById('form')

  domtoimage
    .toPng(form)
    .then((data_url) => {
      link.download = `${title}.png`
      link.href = data_url
      link.click()
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error)
    })
}

export { downloadImage }
