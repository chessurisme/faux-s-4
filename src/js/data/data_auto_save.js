'use strict'

/**
 * Automatically saves data to the browser's local storage.
 */
function dataAutoSave() {
  const name = document.getElementById('name')
  const bible_study = document.getElementById('bible-study')
  const hours = document.getElementById('hours')
  const comments = document.getElementById('comments')

  name.addEventListener('input', () => {
    const input_value_name = name.value
    localStorage.setItem('name', input_value_name)
  })

  bible_study.addEventListener('input', () => {
    const input_value_bible_study = bible_study.value
    localStorage.setItem('bible-study', input_value_bible_study)
  })

  hours.addEventListener('input', () => {
    const input_value_hours = hours.value
    localStorage.setItem('hours', input_value_hours)
  })

  comments.addEventListener('input', () => {
    const input_value_comments = comments.value
    localStorage.setItem('comments', input_value_comments)
  })
}

export { dataAutoSave }
