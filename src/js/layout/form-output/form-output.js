'use strict'

import { FormSizeProportion } from '../../../assets/info/form-size-proportion.js'
import { dataGet } from '../../data/data_get.js'
import { renderForm } from './form-output-render.js'
import { downloadFormInitializer } from '../../integrations/download-form-initializer.js'
import { formOutputStyle } from './form-output-style.js'

class FormOutput {
  constructor() {
    this.data = dataGet()
    this.size_info = new FormSizeProportion(window.innerWidth)
  }

  render() {
    renderForm(this.data)
    formOutputStyle(this.size_info)
  }

  download() {
    downloadFormInitializer()
  }
}

export { FormOutput }
