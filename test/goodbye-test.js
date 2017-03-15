
'use strict';

const expect = require('chai').expect;
const goodbye = require('../lib/goodbye.js');

describe('testing module goodbye.js', function() {
  describe('testing method bye', function() {
    it('should return "see ya later aligator"', function() {
      let result = goodbye.bye('aligator');
      expect(result).to.equal('see ya later aligator');
    });
  });

  describe('testing method peace', function() {
    it('should return "tata forever playa"', function() {
      let result = goodbye.peace('playa');
      expect(result).to.equal('tata forever playa');
    });
  });
});
