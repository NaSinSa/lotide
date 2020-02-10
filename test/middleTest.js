const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;

assertArraysEqual(middle([1]), []) // passed
assertArraysEqual(middle([1, 2]), [])  // passed
assertArraysEqual(middle([1, 2, 3]), [2])  // passed
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])  // passed
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])  // passed
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])  // passed
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 5])  // fail

describe('#middle', () => {
  it('should return [] when there is only one value in a given array', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('should return [2] when there are 1, 2, and 3 in a given array', () => {
    assert.deepEqual(middle([1, 2 ,3]), [2]);
  });
  it('should return [3, 4] when a given array [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2 ,3, 4, 5, 6]), [3, 4]);
  });
  it('should return [3, 4] when a given array [1, 2, 3, 4, 5, 6]', () => {
    assert.notDeepEqual(middle([1, 2 ,3, 4, 5, 6]), [3, 5]);
  });
});