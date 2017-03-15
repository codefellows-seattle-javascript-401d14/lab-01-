'use strict';

const arithmetic = module.exports = {};

arithmetic.add = function add (a, b) {
  if (typeof a == 'number' && typeof b == 'number') {
    return a + b;
  } else {
    return 'You need to enter a number';
  }
};

arithmetic.subtract = function subtract (a, b) {
  if (typeof a == 'number' && typeof b == 'number') {
    return a - b;
  } else {
    return 'You need to enter a number';
  }
};
