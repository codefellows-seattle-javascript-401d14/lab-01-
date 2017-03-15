'use strict';

const expect = require('chai').expect;
const greet = require('../lib/greet.js');

describe('testing module greet.js', function(){
  describe('with vaild inputs', function(){
    it('should return "hello world"', function(){
      expect(greet('world')).to.equal('hello world');
    });
    it('should return "hello playa"', function(){
      expect(greet('playa')).to.equal('hello playa');
    });
  });

  describe('with invalid inputs', function(){
    it('should throw error', function(){
      expect(greet).to.throw(Error);
    });
  });
});
