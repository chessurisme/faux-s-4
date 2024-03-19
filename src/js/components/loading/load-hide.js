'use strict'

/**
 * Hides the loading screen element.
 */
function loadHide() {
  const loadingScreen = document.getElementById('loading-screen')
  loadingScreen.remove()
}

export { loadHide }
