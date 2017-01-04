'use strict';

module.exports = function greet(name) {
  if (typeof name !== 'string')
    return null;
  return 'Hello, ' + name;
};
