const assertArraysEqual = require('chai').assert;

describe('#assertArraysEqual', () => {
  it('should pass when both arrays are equal', () => {
    assertArraysEqual.deepEqual([1, 2, 3], [1, 2, 3]);
  });
});