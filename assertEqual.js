// Using template strings
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    // console.log("Assertion ✅: " + actual + " === " + expected);
    console.log(`Assertion ✅: ${actual} === ${expected}`);
  } else {
    // console.log("Assertion ❌: " + actual + " !=== " + expected);
    console.log(`Assertion ❌: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Jairo", "Jairo");
assertEqual(1, 1);
assertEqual(1, 2);