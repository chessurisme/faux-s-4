'use strict'

import { LoadScreen } from '../components/loading/load-screen.js'
import { PrivacyAndConcernScreen } from '../components/privacy-and-concern/privacy-and-concern.js'
import { isDoneReading } from '../components/privacy-and-concern/privacy-and-concern-done-read.js'
import { FormInput } from '../layout/form-input/form-input.js'
import { counterButtonsEventDelegation } from '../layout/form-input/counter/counter-input-button-event-delegation.js'
import { DateButtons } from '../layout/form-input/date/date-input-buttons.js'
import { createFormRender } from '../components/buttons/create-form/create-form-render.js'
import { showHeader } from '../layout/dom/header.js'
import { switchThemeEventDelegation } from '../components/buttons/switch-theme/switch-theme-event-delegation.js'
import { createFormEventDelegation } from '../components/buttons/create-form/create-form-event-delegation.js'
import { dataAutoSave } from '../data/data_auto_save.js'

function openFormInitializer() {
  const keyword = 'open'

  // Set Preferences
  document.body.setAttribute('data-theme', localStorage.getItem('theme'))

  // Loading State
  new LoadScreen(keyword).render()
  new LoadScreen(keyword).hide()

  // Open Privacy and Concern Screen
  new PrivacyAndConcernScreen().render()
  isDoneReading()

  // Show Header
  showHeader()

  // Create Form Input
  new FormInput().render()

  // Initialize Input Buttons
  document.addEventListener('DOMContentLoaded', () => {
    counterButtonsEventDelegation('bible-study')
    counterButtonsEventDelegation('hours')
    const dateButtons = new DateButtons()
    dateButtons.previousDate()
    dateButtons.nextDate()
  })

  // Create Additional Buttons
  createFormRender()

  // Initialize Additional Buttons
  dataAutoSave()
  createFormEventDelegation()
  switchThemeEventDelegation()
}

export { openFormInitializer }
