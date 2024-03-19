'use strict'

function dataSanitization() {
  let data = JSON.parse(localStorage.getItem('data'))

  if (!data) {
    data = []
  }

  console.log(data)

  for (let index = 0; index < data.length; index++) {
    if (data[index] === null || data[index] === undefined) {
      data[index] = ''
    }
  }

  if (data[2] === '') {
    data[2] = 0
  }

  if (data[3] === '') {
    data[[3]] = 0
  }

  if (/(^| )[a-z]/g.test(data[0])) {
    data[0] = data[0].replace(/(^| )[a-z]/g, (letter) => {
      letter.toUpperCase()
    })
  }

  return data
}

export { dataSanitization }
