const assertEqual = require('chai').assert;

describe('#assertEqual', () => {
  it('should passed/failed depending on the elements comparison (===)', () => {
    assertEqual.strictEqual("Lighthouse Labs", "Bootcamp");
  });
  it('should passed/failed depending on the elements comparison (===)', () => {
    assertEqual.strictEqual("Jairo", "Jairo");
  });
});