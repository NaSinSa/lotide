// const assertArraysEqual = require('./assertArraysEqual')

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

module.exports = middle;