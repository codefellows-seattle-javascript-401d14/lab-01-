'use strict';

const greet = require('../lib/greet.js');
const assert = require('chai').assert;

describe('greet module', function(){
  describe('#helloFriend', function() {
    it('should return Hello friend, your name is: gnoevil', function() {
      var result = greet.helloFriend('gnoevil');
      assert.isTrue(result === 'Hello friend, your name is: gnoevil', 'not equal to Hello friend, your name is: gnoevil');
    });
    it('should throw a missing name error', function() {
      assert.throws(function() {
        greet.helloFriend();
      }, 'error not thrown');
    });
  });
});
