'use strict'

/**
 * Retrieves a random message based on the provided event.
 *
 * @param {string} event - The event for which to retrieve a message. Must be one of 'open', 'create', or 'back'
 * @returns {string|null} - A random message corresponding to the provided event, or null if the event is invalid.
 */
function loadMessages(event) {
  const validEvents = ['open', 'create', 'back']

  if (!validEvents.includes(event)) {
    const not_valid_events = 'The passed event is invalid.'
    console.error(not_valid_events)
    return null
  }

  if (event === 'open') {
    const messages = [
      'Opening form...',
      'Form loading...',
      'Almost ready!',
      'Rendering components...',
      'Initializing styles...',
      'Ready for input!'
    ]

    return messages[Math.floor(Math.random() * messages.length)]
  }

  if (event === 'create') {
    const messages = [
      'Creating form...',
      'Validating your input...',
      'Saving your submission...',
      'Please be patient!'
    ]

    return messages[Math.floor(Math.random() * messages.length)]
  }

  if (event === 'back') {
    const messages = [
      'Returning to input form...',
      'What did you missed?',
      'Make sure everything is correct!',
      'Form closing...',
      'Cleaning up...',
      'Please be patient!'
    ]
    return messages[Math.floor(Math.random() * messages.length)]
  }

  return null
}

export { loadMessages }
