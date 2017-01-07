'use strict';

const chai = require('chai');
const greet = require('../index.js');
const assert = chai.assert;

describe('test index.js', function(){
  describe('test export with args', function(){
    before(function(){
      this.process = process.argv[2];
      process.argv[2] = 'bangarang';
    });

    after(function(){
      process.argv[2] = this.process;
    });

    it('should return "hello bangarang"', function(){
      assert.equal(greet('name'), 'hello bangarang');
    });
  });
});
