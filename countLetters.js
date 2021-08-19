const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion ✅: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion ❌: ${actual} !== ${expected}`);
  }
};

const countLetters = function(phrase) {
  const lettersCount = {};

  for (const letter of phrase) {
    if (letter !== ' ') {
      if (lettersCount[letter]) {
        lettersCount[letter] += 1;
      } else {
        lettersCount[letter] = 1;
      }
    }
  }

  return lettersCount;
};

console.log(countLetters("lighthouse in the house"));

// const letters = countLetters("lighthouse in the house");

// console.log(assertEqual(letters["l"], 1));
// console.log(assertEqual(letters["x"], undefined));
// console.log(assertEqual(letters["e"], 3));