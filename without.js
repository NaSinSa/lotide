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

const without = function(arr1, arr2) {
  let wanted = arr1.slice();
  for (let i = 0; i < arr1.length; i++){
    for (let ele of arr2) {
      if (arr1[i] === ele) {
        wanted.splice(i, 1)
      }
    }
  }
  return wanted;
}