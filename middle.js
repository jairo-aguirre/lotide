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
    console.log(`Assertion ❌: ${assert1} !=== ${assert2}`);
  }
};

const middle = function(array) {
  const middleArray = [];

  if (array.length < 3) {
    return false;
  }
  
  const length = array.length;
  const midpoint = length / 2;

  if (length % 2 === 0) {
    middleArray.push(array[midpoint - 1], array[midpoint]);
  } else {
    middleArray.push(array[parseInt(midpoint)]);
  }

  return middleArray;
};

// Test Code
// console.log(middle([1, 2, 3, 4, 5]));
// const numbers = [1, 2, 3, 4, 5];
// middle(numbers);
// assertArraysEqual(numbers, [1, 2, 3, 4, 5]);