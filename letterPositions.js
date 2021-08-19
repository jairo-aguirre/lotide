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

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    
    if (letter !== ' ' ) {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }

  }

  return results;
};

// console.log(letterPositions("hello"));
// letterPositions("hello");

// const sentence = 'hello'
// console.log(assertArraysEqual(sentence, 'hello'));
// assertArraysEqual(letterPositions("hello").e, [1]);
