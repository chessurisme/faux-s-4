/**
 * PrivacyAndConcernScreen function displays a message about privacy
 * and data collection when the app first loads. It stores
 * a flag in localStorage after the message is displayed to
 * prevent showing it again.
 */
'use strict'

import { app_info } from '../../../assets/info/app-info.js'
import { createLucideIcons } from '../../utilities/create-lucide-icons.js'

/**
 * Represents a Privacy and Concern Screen.
 *
 * This class is responsible for rendering and removing a privacy and concern screen
 * that displays information about the app's privacy policy and the developer's commitment
 * to not collect user input data.
 *
 * @class PrivacyAndConcernScreen
 */
class PrivacyAndConcernScreen {
  constructor() {
    this.icons = ['shield', 'heart', 'check']
    this.title = 'Your privacy matters!'
    this.info = app_info
    this.message = `Rest assured that I, ${this.info.developer.name}, the developer of ${this.info.app.name}, don't collect any of your input data—it stays with you!`
  }

  render() {
    const is_read = localStorage.getItem('isRead')

    if (is_read) {
      console.log('Already Read!')
      return false
    }

    const template = `
      <div id='privacy-and-concern-screen'>
        <div class='icon-row-pac'>
          <i data-lucide='${this.icons[0]}'></i>
          <i data-lucide='${this.icons[1]}'></i>
        </div>        

        <div class='message-row-pac'>
          <p class='title'>${this.title}</p>
          <p class='message'>${this.message}</p>
          <p style='font-size: 10px; margin-top: 10px'>Version 0.9.0 - Beta</p>
        </div>

        <div class='button-pac' id='done-read-pac'>
          <i data-lucide='${this.icons[2]}'></i>
          <p>Done Reading</p>
        </div>   
      </div>
    `

    document.body.innerHTML += template
    createLucideIcons()
    return true
  }

  remove() {
    const privacy_and_concern_screen = document.getElementById(
      'privacy-and-concern-screen'
    )

    if (!privacy_and_concern_screen) {
      return false
    }

    document.body.removeChild(privacy_and_concern_screen)
    return true
  }
}

export { PrivacyAndConcernScreen }
