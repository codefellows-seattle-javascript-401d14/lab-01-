'use strict';

const expect = require('chai').expect;
const greet = require('../lib/greet.js');

describe('testing module greet.js', function(){
  describe('with valid inputs', function(){
    it('should return "Hello, my baby"', function(){
      expect(greet('my baby')).to.equal('Hello, my baby');
    });
    it('should return "Hello, my honey"', function(){
      expect(greet('my honey')).to.equal('Hello, my honey');
    });
    it('should return "Hello, my ragtime gal"', function(){
      expect(greet('my ragtime gal')).to.equal('Hello, my ragtime gal');
    });
  });
  describe('with invalid inputs', function(){
    it('should return null', function(){
      expect(greet(42)).to.equal(null);
    });
  });
});
