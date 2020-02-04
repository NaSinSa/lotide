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

const middle = function(arr) {
  let mid = [];
  let midInd = arr.length / 2;
  if (arr.length < 2) return mid;
  if (Math.floor(midInd) === midInd) {
    mid.push(arr[midInd - 1]);
    mid.push(arr[midInd]);
  } else {
    mid.push(arr[Math.floor(midInd)]);
  }
  return mid;
};
