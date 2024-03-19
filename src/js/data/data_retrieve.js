'use strict'

function dataRetrieve() {
  const data = JSON.parse(localStorage.getItem('data'))

  console.log(data)
  if (!data) {
    return false
  }

  if (data[0] == null || data[0] == undefined) {
    document.getElementById('name').value = ''
  } else {
    document.getElementById('name').value = data[0]
  }

  document.getElementById('date').value = data[1]

  if (data[2] == null || data[1] == undefined) {
    document.getElementById('bible-study').value = 0
  } else {
    document.getElementById('bible-study').value = data[2]
  }

  if (data[3] == null || data[3] == undefined) {
    document.getElementById('hours').value = 0
  } else {
    document.getElementById('hours').value = data[3]
  }

  if (data[4] == null || data[4] == undefined) {
    document.getElementById('comments').value = ''
  } else {
    document.getElementById('comments').value = data[4]
  }
}

export { dataRetrieve }
