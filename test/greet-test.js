'use strict';

const expect = require('chai').expect;
const greet = require('../lib/greet.js');

describe ('this will test greet.js', function(){
  it('this should return "Hello, world"', function(){
    expect(greet('world')).to.equal('Hello, world');
  });
  it('this should return null if not a string', function() {
    expect(greet(2)).to.equal(null);
  })
});
