const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1]), []) // passed
assertArraysEqual(middle([1, 2]), [])  // passed
assertArraysEqual(middle([1, 2, 3]), [2])  // passed
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])  // passed
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])  // passed
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])  // passed
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 5])  // fail