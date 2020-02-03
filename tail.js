const assertEqual = function(actual, expected) {
  return (actual === expected) ? (`✔✔✔ Assertion Passed: ${actual} === ${expected}`) : (`💥💥💥 Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(arr) {
  return arr.slice(1);
};

const words = [];
console.log(tail(words));
console.log(assertEqual(words.length, 0));