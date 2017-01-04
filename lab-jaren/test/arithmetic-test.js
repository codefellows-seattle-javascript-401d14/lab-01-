'use strict';

const expect = require('chai').expect;
const arithmetic = require('../lib/arithmetic.js');

describe('testing module arithmetic.js', function(){
  describe('testing arithmetic.add', function(){
    describe('testing with valid inputs', function(){
      it('should return the number 16', function(){
        expect(arithmetic.add(7, 9)).to.equal(16);
      });
    });
    describe('testing with invalid inputs', function(){
      it('should throw an error', function(){
        expect(arithmetic.add).to.throw(Error);
      });
    });
  });
  describe('testing arithmetic.subtract', function(){
    describe('testing with valid inputs', function(){
      it('should return the number 7', function(){
        expect(arithmetic.subtract(16, 9)).to.equal(7);
      });
    });
    describe('testing with invalid inputs', function(){
      it('should throw an error', function(){
        expect(arithmetic.subtract).to.throw(Error);
      });
    });
  });
});
