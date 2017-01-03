401 JS -- Class 01 Lab modular patterns
===

## Resources  
* [Node assert docs](https://nodejs.org/dist/latest-v4.x/docs/api/assert.html)
* [Mocha docs](http://mochajs.org/#getting-started)

#### Feature Tasks  
* CREATED a nodejs module named greet.js that exports a single function
 * The greet function should HAS a single parameter name that should expect a string
 * The greet function DOES return the input name concatenated with "Hello, "
 * The greet function DOES return null if the input is not a string
* CREATED a nodejs module named arithmetic
 * The arithmetic.js module DOES have `add` and `sub` methods
 * `add` DOES have to params that should expect a number, it should return the sum of the to numbers
 * `sub` DOES have to params that should expect a number, it should return the first argument minus the second argument
 * decide on an expected behavior for non number inputs

#### Testing  
* TEST that expects the greet module to return "Hello, world!" when invoked with "world!"
* TEST that expects the greet module to return null when you use non string values
* TEST for the `add` and `subtract` methods on the arithmetic module
 * TEST that ensures the functions work as you expect with number inputs
 * TEST that ensures the functions work as expected with non number inputs
