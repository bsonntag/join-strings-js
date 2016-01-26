var isString = require('is-string');

function joinStrings(strings, options) {
  var separator = '';
  strings = [].concat(strings);

  if(isString(options)) {
    separator = options;
  }
  else if(options && 'separator' in options) {
    separator = options.separator;
  }

  return strings.reduce(concatWithSeparator.bind(null, separator));
}

function concatWithSeparator(separator, accumulator, value) {
  return ''.concat(accumulator, separator, value);
}

module.exports = joinStrings;
