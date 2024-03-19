'use strict'

/**
 * Function to switch between light and dark themes.
 *
 * @returns {void} This function does not return any value.
 */
function switchTheme() {
  const current_theme = localStorage.getItem('theme')

  if (current_theme === 'light' || !current_theme) {
    document.body.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.body.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
  }
}

export { switchTheme }
