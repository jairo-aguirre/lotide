const assertEqual = require('chai').assert;
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];

describe('#tail', () => {
  it('returns the tail of an array', () => {
    assertEqual.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
});