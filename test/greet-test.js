'use strict';

const chai = require('chai');
const greet = require('../lib/greet.js');

const expect = chai.expect;

describe('testing greet.js', function(){
  it('should return Hello, world', function(){
    expect(greet('world')).to.equal('Hello, world');
  });
  it('should return null', function(){
    expect(greet()).to.equal(null);
  });
});
