const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }

  return true;
};

const assertArraysEqual = (assert1, assert2) => {
  if (eqArrays(assert1, assert2)) 
    console.log(`Assertion ✅: ${assert1} === ${assert2}`);
  else
    console.log(`Assertion ❌: ${assert1} !=== ${assert2}`);
};

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];

  for (const item of array) {
    results.push(callback(item));
  }

  return results;
};

const results1 = map(words, word => word[0]);

// console.log(results1);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);