### Lab 01 Modular Patterns
- First assignment done in Node with testing in Mocha & Chai
- The greet.js module exports the greet function which takes a single string parameter and concatenates it with "Hello, " and returns it, or it returns null if the input is not a string.
- The arithmetic.js module exports an add function and a subtract function. Each takes two number parameters, and if any params of a function have invalid types that function will throw an error.

### Lab 02 Basic Tools
- The primitive data types of JavaScript (number, string, boolean) are pass-by-value; each new assignment takes its own spot in memory.
```javascript
var a = 7;
var b = a;
b += 3;
// a = 7, b = 10
```
- Objects, which is the data type of everything else, are pass-by-reference; a new assignment that references a preexisting object in memory simply 'points' to that same spot in memory.
```javascript
var fly = {cat: "nyan"};
var wet = fly;
wet.cat = "grumpy";
// fly.cat = "grumpy"
```
