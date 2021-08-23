// Using template strings
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`Assertion ✅: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion ❌: ${actual} !== ${expected}`);
  }
};

// Exporting functionality
module.exports = assertEqual;