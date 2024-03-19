'use strict'

import { JSDOM } from 'jsdom'
import { setElementAttributes } from '../../src/js/utilities/set-element-attributes.js'

const dom = new JSDOM('<!DOCTYPE html>')
global.window = dom.window
global.document = window.document
global.HTMLElement = window.HTMLElement

/**
 * Test for the setElementAttributes function
 *
 * @test {Function} setElementAttributes
 */
describe('setElementAttributes', () => {
  it('should set valid attributes on a valid HTML element', () => {
    const element = document.createElement('div')
    const attributes = {
      id: 'sample-div',
      class: 'container',
      style: 'color: blue;'
    }

    const result = setElementAttributes(element, attributes)

    expect(result).toEqual(true)
    expect(element.getAttribute('id')).toBe('sample-div')
    expect(element.getAttribute('class')).toBe('container')
    expect(element.getAttribute('style')).toBe('color: blue;')
  })

  it('should return false when element is not provided', () => {
    const spyConsoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})
    const attributes = {
      id: 'sample-div',
      class: 'container',
      style: 'color: red;'
    }

    const result = setElementAttributes(null, attributes)
    expect(spyConsoleError).toHaveBeenCalledWith(
      'The element must be provided.'
    )
    expect(result).toBe(false)

    spyConsoleError.mockRestore()
  })

  it('should not set attributes on a valid HTML element and an empty object', () => {
    const spyConsoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})
    const element = document.createElement('div')
    const attributes = {}

    const result = setElementAttributes(element, attributes)

    expect(result).toEqual(false)
    expect(spyConsoleError).toHaveBeenCalledWith(
      'The attributes must be provided.'
    )
  })

  it('should log an error message when attributes are not provided', () => {
    const element = document.createElement('div')
    const attributes = null
    const consoleErrorSpy = jest.spyOn(console, 'error')

    const result = setElementAttributes(element, attributes)

    expect(result).toBe(false)
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'The attributes must be provided.'
    )
    consoleErrorSpy.mockRestore()
  })

  it('should not set attributes on a non-HTML element and a non-empty object', () => {
    const element = 'not an HTML element'
    const attributes = {
      id: 'sample-div',
      class: 'container',
      style: 'color: red;'
    }

    const result = setElementAttributes(element, attributes)

    expect(result).toBe(false)
  })

  it('should set attributes with special characters correctly when provided with a valid HTML element and a non-empty object', () => {
    const element = document.createElement('div')
    const attributes = {
      'data-special': 'special',
      'data-test': 'test',
      'data-123': '123'
    }

    const result = setElementAttributes(element, attributes)

    expect(result).toBe(true)
    expect(element.getAttribute('data-special')).toBe('special')
    expect(element.getAttribute('data-test')).toBe('test')
    expect(element.getAttribute('data-123')).toBe('123')
  })
})
