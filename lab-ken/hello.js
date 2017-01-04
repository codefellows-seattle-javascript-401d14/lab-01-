'use strict';

const greet = require ('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');

console.log(greet(2));

console.log(arithmetic.add('k',2));
console.log(arithmetic.add(5,'k'));
console.log(arithmetic.add(7,7));

console.log(arithmetic.sub(10,5));
console.log(arithmetic.sub(5,5));
console.log(arithmetic.sub(2,1));
