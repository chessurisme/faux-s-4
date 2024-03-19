'use strict'

/**
 * Renders a form with the given data.
 *
 * @param {Array} data - An array containing the form data.
 * @param {string} data[0] - The name of the person.
 * @param {string} data[1] - The date of the report.
 * @param {number} data[2] - The number of different Bible studies conducted.
 * @param {number} data[3] - The number of hours spent on field service.
 * @param {string} data[4] - Any additional comments.
 * @returns {void}
 */
function renderForm(data) {
  const name = data[0]
  const date = data[1]
  const bible_study = data[2]
  const hours = data[3]
  const comments = data[4]

  const main = document.querySelector('main')

  const template = `
    <div id='form'>
      <div id='form-container'>
        <p class='heavy' id='title'>FIELD SERVICE REPORT</p>

        <div id='name-and-month-section'>
          <div id='name-section'>
            <p class='heavy'>Name:&nbsp</p>
            <p class='input'>${name}</p>
          </div>

          <div id='month-section'>
            <p class='heavy'>Month:&nbsp</p>
            <p class='input'>${date}</p>
          </div>
        </div>

        <table id='table-one'>
          <tr>
            <td class='first-column noneBorder'>Check the box if you shared in any form<br>of the ministry during the month</td>
            <td class='second-column blueBox noneBorder'><p id='check'>✓</p></td>
          </tr>
          <tr>
            <td class='first-column'>Number of <i>different</i> Bible studies conducted</td>
            <td class='second-column blueBox'>${bible_study}</td>
          </tr>
          <tr>
            <td class='first-column'>Hours (if auxiliary, regular, or special pioneer<br>or field missionary)</td>
            <td class='second-column blueBox'>${hours}</td>
          </tr>
        </table>

        <table id='table-two'>
          <tr>
            <td class='noneBorder'><p>Comments:&nbsp</p></td>
            <td class='noneBorder'><p>${comments}</p></td>
          </tr>
        </table>

        <p id='footer'>S-4-E 11/23</p>
      </div>
    </div>
  `

  main.innerHTML = template
}

export { renderForm }
