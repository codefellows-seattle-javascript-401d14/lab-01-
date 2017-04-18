'use strict';

const arithmetic = require('./lib/arithmetic.js');
const greet = require('./lib/greet.js');

console.log(arithmetic.add(3, 6));
console.log(arithmetic.subtract(6, 3));

console.log(greet('world!'));
