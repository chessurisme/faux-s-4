'use strict'

import { LoadScreen } from '../components/loading/load-screen.js'
import { showHeader } from '../layout/dom/header.js'
import { FormOutput } from '../layout/form-output/form-output.js'
import { downloadImageRender } from '../components/buttons/download-image/download-image-render.js'
import { shareImageRender } from '../components/buttons/share-image/share-image-render.js'
import { backToInputFormRender } from '../components/buttons/back-to-input-form/back-to-input-form-render.js'
import { switchThemeEventDelegation } from '../components/buttons/switch-theme/switch-theme-event-delegation.js'
import { backToInputFormEventDelegation } from '../components/buttons/back-to-input-form/back-to-input-form-event-delegation.js'
import { downloadImageEventDelegation } from '../components/buttons/download-image/download-image-event-delegation.js'
import { shareImageEventDelegation } from '../components/buttons/share-image/share-image-event-delegation.js'

function createFormInitializer() {
  const keyword = 'create'

  // Loading State
  new LoadScreen(keyword).render()
  new LoadScreen(keyword).hide()

  // Create Form
  new FormOutput().render()

  // Clean the DOM
  const header = document.querySelector('header')
  const footer = document.querySelector('footer')

  header.innerHTML = ''
  footer.innerHTML = ''

  // Show Header
  showHeader()

  // Change the style of footer
  footer.style.justifyContent = 'space-between'

  // Create the Buttons
  backToInputFormRender()
  downloadImageRender()
  shareImageRender()

  // Initialize the Button
  switchThemeEventDelegation()
  backToInputFormEventDelegation()
  downloadImageEventDelegation()
  shareImageEventDelegation()
}

export { createFormInitializer }
