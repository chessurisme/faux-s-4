'use strict'

import { formCounterTemplate } from './counter/counter-input-template.js'
import { formTextTemplate } from './text/text-input-template.js'
import { formDateTemplate } from './date/date-input-template.js'
import { formTextareaTemplate } from './textarea/textarea-input-template.js'
import { createLucideIcons } from '../../utilities/create-lucide-icons.js'
import { Callout } from '../../components/callout/callout.js'

/**
 * The FormInput class represents a form input component that includes various input fields such as name, date, counter, and textarea.
 *
 * @constructor
 * @property {HTMLElement} layout - The main container element for the form input component.
 * @property {HTMLElement} name - The input field for the name.
 * @property {HTMLElement} date - The input field for the date.
 * @property {HTMLElement} bible_study - The counter input field for the bible study.
 * @property {HTMLElement} hours - The counter input field for the hours.
 * @property {HTMLElement} comment - The textarea input field for the comment.
 */
class FormInput {
  constructor() {
    this.name = formTextTemplate()
    this.date = formDateTemplate()
    this.bible_study = formCounterTemplate('bible-study')
    this.hours = formCounterTemplate('hours')
    this.comment = formTextareaTemplate()
  }

  render() {
    const main_container = document.querySelector('main')

    if (!main_container) {
      const no_main_container = [
        'error',
        'No `main-container` found in DOM!',
        '0x0100',
        'I'
      ]

      new Callout(no_main_container)
    }

    main_container.append(this.name)
    main_container.append(this.date)
    main_container.append(this.bible_study)
    main_container.append(this.hours)
    main_container.append(this.comment)

    createLucideIcons()
  }
}

export { FormInput }
