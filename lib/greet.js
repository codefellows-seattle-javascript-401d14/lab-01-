'use strict';

module.exports = function greet(name){
  if (typeof name !== 'string') throw new Error('expected a string');
  return 'hello ' + name;
};
