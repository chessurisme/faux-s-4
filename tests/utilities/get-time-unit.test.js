'use strict'

import { getTimeUnit } from '../../src/js/utilities/get-time-unit.js'
import { getCurrentYear } from '../../src/js/utilities/get-the-year.js'
import { getCurrentMonth } from '../../src/js/utilities/get-the-month.js'
import { getCurrentHour } from '../../src/js/utilities/get-the-hour.js'

/**
 * Test for the getTimeUnit function
 *
 * @test {Function} getTimeUnit
 */
describe('getTimeUnit', () => {
  it('should return the value of the specified time unit when the unit is "year"', () => {
    const result = getTimeUnit('year')
    expect(result).toBe(getCurrentYear())
  })

  it('should return the value of the specified time unit when the unit is "month"', () => {
    const result = getTimeUnit('month')
    expect(result).toBe(getCurrentMonth())
  })

  it('should return the value of the specified time unit when the unit is "hour"', () => {
    const result = getTimeUnit('hour')
    expect(result).toBe(getCurrentHour())
  })

  it('should return false when an invalid unit is provided', () => {
    const result = getTimeUnit('minutes')
    expect(result).toBe(false)
  })

  it('should return false when no unit is provided', () => {
    const result = getTimeUnit()
    expect(result).toBe(false)
  })

  it('should return false when a non-string value is provided as the unit', () => {
    const result = getTimeUnit(123)
    expect(result).toBe(false)
  })

  it('should log an error message when the unit is not provided', () => {
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    getTimeUnit()

    expect(consoleErrorSpy).toHaveBeenCalledWith('The unit must be provided.')

    consoleErrorSpy.mockRestore()
  })

  it('should log an error message when the unit is not supported', () => {
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    getTimeUnit('invalidUnit')

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'The unit provided is not listed on supported time units.'
    )

    consoleErrorSpy.mockRestore()
  })
})
