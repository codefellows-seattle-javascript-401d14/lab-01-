'use strict';

const arithmetic = module.exports = {};

arithmetic.add = function(x,y) {
  if (typeof x == 'number' && typeof y == 'number') {
    return x + y;
  } else {
    return 'please enter numerical values';
  }
};

arithmetic.sub = function(x,y) {
  if (typeof x == 'number' && typeof y == 'number') {
    return x - y;
  } else {
    return 'please enter numerical values';
  }
};
