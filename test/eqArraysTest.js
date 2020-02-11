const eqArrays = require('../eqArrays');
// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;


// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false));
// console.log(assertEqual(eqArrays(["1", "2", 3], ["1", "2", 3]), false));
// console.log(assertEqual(eqArrays(["abc", "2", 3], ["1", "2", 3]), false));

describe('#eqArrays', () => {
  it('should return true', () => {
    assert.isTrue(eqArrays([1], [1]));
  });
  it('should return true', () => {
    assert.isTrue(eqArrays([1, 2 ,3], [1,2,3]));
  });
  it('should return true', () => {
    assert.isTrue(eqArrays([1, 2 ,3, 4, 5, 6], [1,2,3, 4,5,6]));
  });
  it('should return false', () => {
    assert.isFalse(eqArrays([1, 2 ,3, 4, 5, 6], [3, 4, 5]));
  });
});