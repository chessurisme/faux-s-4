'use strict'

/**
 * Class representing the FormSizeProportion.
 *
 * @class
 * @classdesc This class calculates the size proportions for a form based on the screen width size.
 * @param {number} screen_width_size - The screen width size.
 * @property {number} width - The calculated width of the form.
 * @property {number} height - The calculated height of the form.
 * @property {Array<number>} padding - The calculated padding values for different sections of the form.
 * @property {Array<number>} table_one - The calculated values for the first table in the form.
 * @property {Array<number>} table_two - The calculated values for the second table in the form.
 * @property {Array<number>} text_size - The calculated text sizes for different elements in the form.
 */
class FormSizeProportion {
  constructor(screen_width_size) {
    this.width = screen_width_size * 0.75
    this.height = this.width * 0.7522488756
    this.padding = this.paddingData()
    this.table_one = this.tableOneData()
    this.table_two = this.tableTwoData()
    this.text_size = this.textSizeData()
  }

  paddingData() {
    return [
      (this.whole_padding = this.width * 0.035982009),
      (this.name_and_month_section_padding = this.width * 0.0269865067),
      (this.table_padding = this.width * 0.017982)
    ]
  }

  tableOneData() {
    return [
      (this.table_one_height = this.width * 0.2698650675),
      (this.first_column = this.width * 0.800599),
      (this.second_column = this.width * 0.131934033)
    ]
  }

  tableTwoData() {
    return [(this.table_two_height = this.width * 0.1169415292)]
  }

  textSizeData() {
    return [
      (this.text_25 = this.width * 0.0374812594),
      (this.text_23 = this.width * 0.0344827586),
      (this.text_22 = this.width * 0.0329835082),
      (this.text_17 = this.width * 0.0254872564)
    ]
  }
}

export { FormSizeProportion }
