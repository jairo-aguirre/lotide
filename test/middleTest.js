const assertArraysEqual = require('chai').assert;
const middle = require('../middle');

// Test Code
const numbers = [1, 2, 3, 4, 5];
middle(numbers);
// assertArraysEqual(numbers, [1, 2, 3, 4, 5]);

describe('#head', () => {
  it('returns true when is compare numbers length with [1, 2, 3, 4, 5] length', () => {
    assertArraysEqual.strictEqual(numbers.length, [1, 2, 3, 4, 5].length);
  });
});