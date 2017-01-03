'use strict';

const chai = require('chai');
const greet = require ('../lib/greet.js');
const arithmetic = require ('../lib/arithmetic.js');

const expect = chai.expect;

describe ('testing module greet.js', function(){
  it('should return "hello world"', function(){
    expect(greet('world')).to.equal('Hello, world');
  });
  it ('should return null if value is not a string', function(){
    expect(greet(false)).to.equal(null);
  })
})

describe('testing module arithmetic.js', function(){
  it('should add two integers', function(){
    expect(arithmetic.add(3,3)).to.equal(6);
    expect(arithmetic.add(10,3)).to.equal(13);
    });
  it('should throw an error', function (){
    expect(arithmetic.add('',3)).to.equal('Both inputs must be numbers');
  });
  it('should throw another error',function () {
    expect(arithmetic.add(2,'')).to.equal('Both inputs must be numbers');
  });
  it('should say "both inputs must be numbers"', ()=> {
    expect(arithmetic.add(2,true)).to.equal('Both inputs must be numbers');
  });

  it('should subtract two integers', function(){
    expect(arithmetic.sub(10,3)).to.equal(7);
    expect(arithmetic.sub(10,3)).to.not.equal(5);
  });
})
