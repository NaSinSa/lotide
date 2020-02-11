

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

module.exports = flatten;