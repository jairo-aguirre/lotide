const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion ✅: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion ❌: ${actual} !=== ${expected}`);
  }
};

const tail = function(elements) {
  let newArray = [];

  for (let i = 1; i < elements.length; i++) {
    newArray[i-1] = elements[i];
  }

  return newArray;
};

// Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!