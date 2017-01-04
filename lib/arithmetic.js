'use strict';

const arithmetic = module.exports = {};

arithmetic.add = function(a,b){
  if(typeof a === 'number' && typeof b === 'number'){
    return a + b;
  } else {
    return 'You must pass in numbers, in numerical form';
  }
};

arithmetic.sub = function(a,b) {
  if(typeof a === 'number' && typeof b === 'number'){
    return a - b;
  } else {
    return 'You must pass in numbers, in numerical form';
  }
};
