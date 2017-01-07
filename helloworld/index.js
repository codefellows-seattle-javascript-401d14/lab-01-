'use strict';

const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');

module.exports = function(){
  var name = process.argv[2] || 'bangarang';
  return greet(name);
};
console.log(greet('bangarang'));

console.log(arithmetic.add(3,4));
console.log(arithmetic.add(7,0));
console.log(arithmetic.add('lulz',4));

console.log(arithmetic.sub(7,4));
console.log(arithmetic.sub('lulz','lulz'));
console.log(arithmetic.sub('roflcopter',4));
