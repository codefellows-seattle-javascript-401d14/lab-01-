## Synopsis
First lab 401d14

## Tests

Tested with Mocha

## License

ISC


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

 401 JS -- Lab 02 build tools
===

## Submision Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  

## Learning Objectives  
* Students will be able to manage a dependiecies with a package.json
* Students will be able to create automated tasks using gulp
* Students will be able to create automated tasks using npm scripts

## Resources  
* [Gulp API docs](https://github.com/gulpjs/gulp/blob/master/docs/API.md)  

## Requirements  
#### Configuration  
* add a gulpfile **gulpfile.js**

#### Feature Tasks  
* Create a gulpfile
 * with a `test` task for running mocha
 * with a `lint` task for running eslint
 * with a `dev` task for running `test` and `lint` when any javascript project file chages
 * with a `default` task fro running `test` and `lint` once
* Add `lint` script to the **package.json** for running eslint
* Add `test` script to the **package.json** for running mocha

###### BONUS 1pt
* Create a CLI that uses command line arguments to pass a name into the greet function
 * The cli should be in new module named index.js

####  Documentation  
* In your **README.md** write documation to explain how Javascript's data types are passed by value or passed by reference

#### Testing  
###### BONUS 1pt
* Write a test for the index.js CLI

## Rubric  
* 2ps Configuration
* 3pts Feature Tasks
* 3pts Tests
* 2pts Documentation

### Documentation
* Javascript is generally pass by value, but when a variable refers to an object (including arrays), the value becomes reference to the object.Changing the value of a variable points the variable to a new object. However, changing a property of an object referenced by a variable does change the underlying object.
