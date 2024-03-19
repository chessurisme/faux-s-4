'use strict'

import { dataSanitization } from './data_sanitization.js'
import { dataValidation } from './data_validation.js'

function dataGet() {
  const date = document.getElementById('date')

  let data_name = localStorage.getItem('name')
  const data_date = date.textContent
  let data_bible_study = localStorage.getItem('bible-study')
  let data_hours = localStorage.getItem('hours')
  const data_comments = localStorage.getItem('comments')
  const data = [
    data_name,
    data_date,
    data_bible_study,
    data_hours,
    data_comments
  ]

  localStorage.setItem('data', JSON.stringify(data))
  const sanitize_data = dataSanitization()
  dataValidation(sanitize_data)
  return sanitize_data
}

export { dataGet }
