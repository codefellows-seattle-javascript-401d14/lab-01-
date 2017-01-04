'use strict';

const expect = require('chai').expect;
const arithmetic = require('../lib/arithmetic.js');

describe('testing arithmetic module', function(){
  describe('addition test', function(){
    describe('testing with numbers', function(){
      it('sum should be 9', function(){
        expect(arithmetic.add(3, 6)).to.equal(9);
      });
    });
    describe('with invalid inputs', function(){
      it('this should return an error', function() {
        expect(arithmetic.add('batman',6)).to.equal('please enter number values');
      });
    });
  });
  describe('subtraction test', function(){
    describe('testing with numbers', function(){
      it('difference sould be 3', function(){
        expect(arithmetic.subtract(6, 3)).to.equal(3);
      });
    });
    describe('with invalid inputs', function(){
      it('this should return an error', function() {
        expect(arithmetic.subtract('robin',3)).to.equal('please enter number values');
      });
    });
  });
});
