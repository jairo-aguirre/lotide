const assertEqual = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it("returns true when both arrays are equal", () => {
    assertEqual.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false when arrays are not equal", () => {
    assertEqual.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});