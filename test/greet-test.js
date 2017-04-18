'use strict';

const expect = require('chai').expect;
const greet = require('../lib/greet.js');


describe('testing greet module', function(){
  describe('with valid inputs', function(){
    it('should return "Hello, world!"', function(){
      expect(greet('world!')).to.equal('Hello, world!');
    });
  });
});

describe('with invalid inputs', function(){
  it('should return null', function(){
    expect(greet(6)).to.equal(null);
  });
});
