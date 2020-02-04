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

const flatten = function(arr) {
  let flat = [];
  for (let ele of arr) {
    if (!Array.isArray(ele)) {
      flat.push(ele);
    } else {
      for (let element of ele) {
        flat.push(element);
      }
    }
  }
  return flat;
};