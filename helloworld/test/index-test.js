'use strict';

const chai = require('chai');
const main = require('../index.js');
const assert = chai.assert;

describe('test index.js', function(){
  describe('test export with args', function(){
    before(function(){
      this.process = process.argv[2];
      process.argv[2] = name;
    });

    after(function(){
      process.argv[2] = this.process;
    });

    it('should return "hello bangarang"', function(){
      assert.equal(main('name'), 'hello bangarang');
    });
  });
});
