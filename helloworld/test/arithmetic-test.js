'use strict';

const chai = require('chai');
const arithmetic = require('../lib/arithmetic.js');

const expect = chai.expect;

describe('testing module arithmetic.js', function(){
  it('should be sum of a and b or two numbers', function(){
    expect(arithmetic.add(3,4)).to.equal(7);
    expect(arithmetic.add(7,0)).to.equal(7);
  });
  it('should throw an error', function (){
    expect(arithmetic.add('',4)).to.equal('please enter numerical values');
  });
  it('should subtract two numbers or a and b', function(){
    expect(arithmetic.sub(7,4)).to.equal(3);
  });
  it('should throw an error', function (){
    expect(arithmetic.sub(' ', ' ')).to.equal('please enter numerical values');
    expect(arithmetic.sub(' ', 4)).to.equal('please enter numerical values');
  });
});
