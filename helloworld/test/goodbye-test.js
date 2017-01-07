'use strict';

const expect = require('chai').expect;
const goodbye = require('../lib/goodbye.js');

describe('testing module goodbye.js', function(){
  describe('testing method cya', function(){
    it('should return "see ya later bangarang"', function(){
      let result = goodbye.cya('bangarang');
      expect(result).to.equal('see ya later bangarang');
    });
  });

  describe('testing method tatatu', function(){
    it('should return "sea ya later bangarang"', function(){
      let result = goodbye.tatatu('bangarang');
      expect(result).to.equal('tata fernowbangarang');
    });
  });
});
