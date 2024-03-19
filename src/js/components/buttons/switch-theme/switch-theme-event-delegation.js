'use strict'

import { switchTheme } from './switch-theme'

function switchThemeEventDelegation() {
  const switchThemeButton = document.getElementById('switch-theme-button')

  if (switchThemeButton) {
    switchThemeButton.addEventListener('click', () => {
      switchTheme()
    })
  }
}

export { switchThemeEventDelegation }
