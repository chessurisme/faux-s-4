'use strict'

import { datePreviousMonth } from './date-button-previous-month.js'
import { dateNextMonth } from './date-button-next-month.js'

/**
 * The DateButtons class represents a set of buttons for navigating between dates.
 * It provides methods for handling the previous and next date buttons.
 *
 * @class
 */
class DateButtons {
  previousDate() {
    const prevDate = document.getElementById('previous-date')
    const dateDisplay = document.getElementById('date')

    prevDate.addEventListener('click', () => {
      const currentDate = dateDisplay.textContent
      const prevMonth = datePreviousMonth(currentDate)
      dateDisplay.textContent = prevMonth
    })
  }

  nextDate() {
    const nextDate = document.getElementById('next-date')
    const dateDisplay = document.getElementById('date')

    nextDate.addEventListener('click', () => {
      const currentDate = dateDisplay.textContent
      const nextMonth = dateNextMonth(currentDate)
      dateDisplay.textContent = nextMonth
    })
  }
}

export { DateButtons }
