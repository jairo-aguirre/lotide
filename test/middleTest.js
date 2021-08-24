const assertArraysEqual = require('chai').assert;
const middle = require('../middle');

// Test Code
const numbers = [1, 2, 3, 4, 5];

describe('#middle', () => {
  it('returns the middle element in an array', () => {
    assertArraysEqual.deepEqual(middle(numbers), [3]);
  });
});