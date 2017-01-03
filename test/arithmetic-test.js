'use strict';

const assert = require('assert');
const arithmetic = require('../lib/arithmetic');

describe('an arithmetic module', function() {
  describe('add()', function () {
    it('can add two numbers', function () {
      assert.equal(arithmetic.add(2, 4), 6);
    });
  });

  describe('sub()', function() {
    it('can subract two numbers', function () {
      assert.equal(arithmetic.sub(4, 2), 2);
    });
  });
});
