'use strict'

// CSS
import '../css/base/body.css'
import '../css/base/color.css'

// DOM
import '../css/layout/dom/load.css'
import '../css/layout/dom/privacy-and-concern.css'
import '../css/layout/dom/main-container.css'
import '../css/layout/dom/button.css'
import '../css/layout/dom/callout.css'

import '../css/layout/form/form-input.css'
import '../css/layout/form/form-output.css'

import { openFormInitializer } from './integrations/open-form-initializer.js'
// import { createFormInitializer } from './integrations/csreate-form-initializer.js'
// import { downloadFormInitializer } from './integrations/download-form-initializer.js'

function initializeApp() {
  openFormInitializer()
  // createFormInitializer()
  // downloadFormInitializer()
}

initializeApp()
