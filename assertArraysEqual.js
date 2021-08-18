const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  const length = array1.length;

  for (let i = 0; i < length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(assert1, assert2) {
  if (eqArrays(assert1, assert2)) {
    console.log(`Assertion ✅: ${assert1} === ${assert2}`);
  } else {
    console.log(`Assertion ❌: ${assert1} !== ${assert2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);