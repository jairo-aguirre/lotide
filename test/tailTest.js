const assertEqual = require('chai').assert;
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// // assertEqual(words.length, 3); // original array should still have 3 elements!

describe('#tail', () => {
  it('returns the lenght of the word array wich is 3', () => {
    assertEqual.equal(words.length, 3);
  });
});