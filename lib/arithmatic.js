'use strict';

const arithmatic = module.exports = {};

arithmatic.add = function(a, b){
  if (isNaN(a) || isNaN(b)) return 'Arguments must be numbers!';
  return a + b;
};

arithmatic.sub = function(a, b) {
  if (isNaN(a) || isNaN(b)) return 'Arguments must be numbers!';
  return a - b;
};
