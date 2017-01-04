'use strict';
const arithmetic = require('../lib/arithmetic.js');
const expect = require('chai').expect;

describe ('this will test arithmetic.js', function(){
  it('this should add two numbers', function(){
    expect(arithmetic.add(3,5)).to.equal(8);
  });
  it('this should subtract two numbers', function() {
    expect(arithmetic.sub(7,4)).to.equal(3);
  });
  it('this should return an error', function() {
    expect(arithmetic.add(false,3)).to.equal('You must pass in numbers, in numerical form');
  });
});
