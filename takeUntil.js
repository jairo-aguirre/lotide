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

const takeUntil = (array, callback) => {
  const newArray = [];

  for (const element of array) {
    if (!callback(element)) {
      newArray.push(element);
    } else return newArray;
  }
};

// Expected Input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
assertArraysEqual([ 1, 2, 5, 7, 2 ], results1);

// console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
assertArraysEqual([ 'I\'ve', 'been', 'to', 'Hollywood' ], results2);

// Expected Output
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]