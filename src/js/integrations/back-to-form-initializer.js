'use strict'

import { LoadScreen } from '../components/loading/load-screen.js'
import { FormInput } from '../layout/form-input/form-input.js'
import { counterButtonsEventDelegation } from '../layout/form-input/counter/counter-input-button-event-delegation.js'
import { DateButtons } from '../layout/form-input/date/date-input-buttons.js'
import { createFormRender } from '../components/buttons/create-form/create-form-render.js'
import { showHeader } from '../layout/dom/header.js'
import { switchThemeEventDelegation } from '../components/buttons/switch-theme/switch-theme-event-delegation.js'
import { createFormEventDelegation } from '../components/buttons/create-form/create-form-event-delegation.js'
import { dataAutoSave } from '../data/data_auto_save.js'
import { dataRetrieve } from '../data/data_retrieve.js'

function backToFormInitializer() {
  const keyword = 'back'

  // Set Preferences
  document.body.setAttribute('data-theme', localStorage.getItem('theme'))

  // Loading State
  new LoadScreen(keyword).render()
  new LoadScreen(keyword).hide()

  // Clean the DOM
  const header = document.querySelector('header')
  const main = document.querySelector('main')
  const footer = document.querySelector('footer')

  header.innerHTML = ''
  main.innerHTML = ''
  footer.innerHTML = ''

  // Show Header
  showHeader()

  // Change the style of footer
  footer.style.justifyContent = 'flex-end'

  // Create Form Input
  new FormInput().render()

  // Add the data as values in input
  dataRetrieve()

  // Initialize Input Buttons
  counterButtonsEventDelegation('bible-study')
  counterButtonsEventDelegation('hours')
  const dateButtons = new DateButtons()
  dateButtons.previousDate()
  dateButtons.nextDate()

  // Create Additional Buttons
  createFormRender()

  // Initialize Additional Buttons
  dataAutoSave()
  createFormEventDelegation()
  switchThemeEventDelegation()
}

export { backToFormInitializer }
