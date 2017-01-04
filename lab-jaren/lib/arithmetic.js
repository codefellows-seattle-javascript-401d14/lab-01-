'use strict';

const arithmetic = module.exports = {};

arithmetic.add = function(first, second) {
  if (isNaN(first) || isNaN(second))
    throw new Error('expected both params to be numbers');
  return first + second;
};

arithmetic.subtract = function(first, second) {
  if (isNaN(first) || isNaN(second))
    throw new Error('expected both params to be numbers');
  return first - second;
};
