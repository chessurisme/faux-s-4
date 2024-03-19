'use strict'

import { LoadScreen } from '../components/loading/load-screen.js'
import { openFormInitializer } from './open-form-initializer.js'

function downloadFormInitializer() {
  const keyword = 'download'

  // Loading State
  new LoadScreen(keyword).render()
  new LoadScreen(keyword).hide()

  // Clear localStorage
  localStorage.removeItem('data')
  localStorage.removeItem('name')
  localStorage.removeItem('bible_study')
  localStorage.removeItem('hours')
  localStorage.removeItem('comments')
  localStorage.removeItem('date')

  // Clean the DOM
  const header = document.querySelector('header')
  const main = document.querySelector('main')
  const footer = document.querySelector('footer')

  header.innerHTML = ''
  main.innerHTML = ''
  footer.innerHTML = ''

  // Change the style of footer
  footer.style.justifyContent = 'flex-end'

  // Open Form
  openFormInitializer()
}

export { downloadFormInitializer }
