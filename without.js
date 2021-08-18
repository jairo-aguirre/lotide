const eqArrays = function (array1, array2) {
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

const assertArraysEqual = function (assert1, assert2) {
  if (eqArrays(assert1, assert2)) {
    console.log(`Assertion ✅: ${assert1} === ${assert2}`);
  } else {
    console.log(`Assertion ❌: ${assert1} !=== ${assert2}`);
  }
};

const without = function (source, itemsToRemove) {
  const newArray = [];

  source.forEach(element => {
    if (!itemsToRemove.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};

// console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);