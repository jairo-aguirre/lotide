const eqArrays = require('./eqArrays');

const assertArraysEqual = (assert1, assert2) => {
  if (eqArrays(assert1, assert2)) {
    console.log(`Assertion ✅: ${assert1} === ${assert2}`);
  } else {
    console.log(`Assertion ❌: ${assert1} !== ${assert2}`);
  }
};

module.exports = assertArraysEqual;