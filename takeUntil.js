const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  console.log(eqArrays(arr1, arr2));
};

const takeUntil = function(array, callback) {
  let result = [];
  for (let ele of array) {
    if (callback(ele)) {
      return result;
    } else if (!callback(ele)) {
      result.push(ele);
    }
  }
};