'use strict'

const prettier = require('prettier')
const extend = require('extend-shallow')

exports.name = 'prettier'
exports.inputFormats = ['prettier', 'pretty', 'cleanjs']
exports.outputFormat = 'js'

exports.render = function (str, options, locals) {
  return prettier.format(str, extend({}, options, locals))
}
