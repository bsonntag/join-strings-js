var isString = require('is-string');

function joinStrings(options) {
  var strings = parseArguments(Array.prototype.slice.call(arguments, 1));
  var delimiter = '';
  var prefix = '';
  var suffix = '';

  if(isString(options)) {
    delimiter = options;
  }
  else if(options) {
    delimiter = options.delimiter || '';
    prefix = options.prefix || '';
    suffix = options.suffix || '';
  }

  var joined = strings.join(delimiter);
  return prefix.concat(joined, suffix);
}

function parseArguments(args) {
  if(Array.isArray(args[0])) {
    return args[0];
  }
  else {
    return args;
  }
}

module.exports = joinStrings;
