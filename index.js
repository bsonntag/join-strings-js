var isString = require('is-string');

function joinStrings(strings, options) {
  var delimiter = '';
  var prefix = '';
  var suffix = '';
  strings = [].concat(strings);

  if(isString(options)) {
    delimiter = options;
  }
  else if(options) {
    delimiter = options.delimiter || '';
    prefix = options.prefix || '';
    suffix = options.suffix || '';
  }

  var joined = strings.reduce(concatWithDelimiter.bind(null, delimiter));
  return prefix.concat(joined, suffix);
}

function concatWithDelimiter(delimiter, accumulator, value) {
  return ''.concat(accumulator, delimiter, value);
}

module.exports = joinStrings;
