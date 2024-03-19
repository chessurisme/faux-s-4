'use strict'

function datePreviousMonth(currentDate) {
  let [month, year] = currentDate.split(' ')
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const current_month_index = months.indexOf(month)
  let prev_month = months[current_month_index - 1]

  if (current_month_index === 0) {
    prev_month = months[11]
    year = parseInt(year) - 1
  }

  return `${prev_month} ${year}`
}

export { datePreviousMonth }
