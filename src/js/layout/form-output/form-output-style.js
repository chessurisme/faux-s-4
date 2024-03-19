'use strict'

import { setStyle } from '../../utilities/set-element-style.js'

/**
 * Sets the style of various elements in the form based on the provided sizes.
 *
 * @param {Object} sizes - The sizes object containing the dimensions and padding values.
 * @param {number} sizes.width - The width of the form container in pixels.
 * @param {number} sizes.height - The height of the form container in pixels.
 * @param {number} sizes.whole_padding - The padding of the form container in pixels.
 * @param {number} sizes.name_and_month_section_padding - The padding of the name and month section in pixels.
 * @param {number} sizes.table_padding - The padding of the table cells in pixels.
 * @param {number} sizes.first_column - The width of the first column in pixels.
 * @param {number} sizes.table_two_height - The height of the table two in pixels.
 * @param {number} sizes.text_25 - The font size of the check element in pixels.
 * @param {number} sizes.text_23 - The font size of the name and month section in pixels.
 * @param {number} sizes.text_22 - The font size of the table one and table two in pixels.
 * @param {number} sizes.text_17 - The font size of the footer in pixels.
 * @returns {void}
 */
function formOutputStyle(sizes) {
  const form_container = document.getElementById('form-container')

  setStyle(form_container, {
    width: `${sizes.width}px`,
    height: `${sizes.height}px`,
    padding: `${sizes.whole_padding}px`
  })

  const title = document.getElementById('title')
  setStyle(title, {
    fontSize: `${sizes.text_25}px`,
    textAlign: 'center'
  })

  const name_and_month_section = document.getElementById(
    'name-and-month-section'
  )
  setStyle(name_and_month_section, {
    paddingLeft: `${sizes.name_and_month_section_padding}px`,
    fontSize: `${sizes.text_23}px`
  })

  const table_one = document.getElementById('table-one')
  setStyle(table_one, {
    fontSize: `${sizes.text_22}px`
  })

  const check = document.getElementById('check')
  setStyle(check, {
    width: `${sizes.text_25 + 2}px`,
    height: `${sizes.text_25 + 2}px`
  })

  const td_elements_of_table_one = table_one.getElementsByTagName('td')
  Array.from(td_elements_of_table_one).forEach((td) => {
    setStyle(td, { padding: `${sizes.table_padding}px` })
  })

  const set_columns_styles = (columns, width) => {
    columns.forEach((column) => {
      if (column.classList.contains('first-column')) {
        setStyle(column, { width: `${width}px`, textAlign: 'left' })
      } else {
        setStyle(column, { width: `${width}px`, textAlign: 'center' })
      }
    })
  }

  const first_columns = document.querySelectorAll('.first-column')
  set_columns_styles(first_columns, sizes.first_column)

  const second_columns = document.querySelectorAll('.second-column')
  set_columns_styles(second_columns, sizes.width - sizes.first_column)

  const table_two = document.getElementById('table-two')
  setStyle(table_two, {
    height: `${sizes.table_two_height}px`,
    fontSize: `${sizes.text_22}px`
  })

  const td_elements_of_table_two = table_two.getElementsByTagName('td')
  Array.from(td_elements_of_table_two).forEach((td) => {
    setStyle(td, { padding: `${sizes.table_padding}px` })
  })

  const footer = document.getElementById('footer')
  setStyle(footer, {
    fontSize: `${sizes.text_17}px`
  })
}

export { formOutputStyle }
