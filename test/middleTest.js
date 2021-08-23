const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// Test Code
const numbers = [1, 2, 3, 4, 5];
middle(numbers);
assertArraysEqual(numbers, [1, 2, 3, 4, 5]);