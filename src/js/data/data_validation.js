'use strict'

import { Callout } from '../components/callout/callout.js'

/**
 * Validates the given data for completeness and correctness.
 *
 * @param {Array} data - The data to be validated.
 * @returns {boolean} - Returns true if the data is valid, false otherwise.
 */
function dataValidation(data) {
  const name = data[0]
  const date = data[1]
  const bible_study = data[2]
  const hours = data[3]
  // const comments = data[4]

  // If there is no data
  if (!data) {
    const no_data = [
      'error',
      'Please fill out all of the fields.',
      '0x0100',
      'E'
    ]

    new Callout(no_data).render()
    return false
  }

  // If the vital data is empty or null or undefined
  if (name === undefined || date === undefined) {
    const data_empty = ['error', 'Please fill out the fields.', '0x0101', 'E']

    new Callout(data_empty).render()
    return false
  }

  // If name has a number
  if (/\d/.test(name)) {
    const name_has_number = [
      'error',
      'Please do not include numbers in your name.',
      '0x0102',
      'E'
    ]

    new Callout(name_has_number).render()
    return false
  }

  // If name don't have a space in the middle of words
  if (!/\s/.test(name)) {
    const name_no_space = [
      'error',
      'Seems your name is incomplete.',
      '0x0103',
      'E'
    ]

    new Callout(name_no_space).render()
    return false
  }

  // If name has a special characters
  if (!/^[a-zA-Z ]*$/.test(name)) {
    const name_has_special_characters = [
      'error',
      'Please do not include special characters in your name.',
      '0x0104',
      'E'
    ]

    new Callout(name_has_special_characters).render()
    return false
  }

  // If bible_study is not a number or empty
  if (isNaN(bible_study) || bible_study === '') {
    const bible_study_not_a_number = [
      'error',
      'Please enter a number for the number of bible studies conducted.',
      '0x0105',
      'E'
    ]

    new Callout(bible_study_not_a_number).render()
    return false
  }

  // If hours is not a number or empty
  if (isNaN(hours) || hours === '') {
    const hours_not_a_number = [
      'error',
      'Please enter a number for the number of hours.',
      '0x0106',
      'E'
    ]

    new Callout(hours_not_a_number).render()
    return false
  }

  return true
}

export { dataValidation }
