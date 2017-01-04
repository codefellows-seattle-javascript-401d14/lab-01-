'use strict';

const arithmetic = module.exports = {};

arithmetic.add = function(a,b) {
  if (isNaN(a) || isNaN(b)) {
    return 'please enter number values';
  }else {
    return a + b;
  }
};

arithmetic.subtract = function(a,b) {
  if (isNaN(a) || isNaN(b)) {
    return 'please enter number values';
  }else {
    return a - b;
  }
};
