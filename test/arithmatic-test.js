'use strict';

const chai = require('chai');
const arithmatic = require('../lib/arithmatic.js');

const expect = chai.expect;


describe('testing arithmatic.js', function(){
  it('Should return a number', function(){
    expect(typeof(arithmatic.add(1, 2))).to.equal('number');
  });
  it('should return "Arguments must be numbers!"', function(){
    expect(arithmatic.add({}, true)).to.equal('Arguments must be numbers!');
  });
  it('should return "Should return a number"', function(){
    expect(typeof(arithmatic.sub(1, 2))).to.equal('number');
  });
  it('should return "Arguments must be numbers!"', function(){
    expect(arithmatic.sub({}, true)).to.equal('Arguments must be numbers!');
  });
});
