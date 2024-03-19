'use strict'

function dateNextMonth(currentDate) {
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
  let next_month = months[current_month_index + 1]
  const December = 11

  if (current_month_index === December) {
    next_month = months[0]
    year = parseInt(year) + 1
  }

  return `${next_month} ${year}`
}

export { dateNextMonth }
