const assertEqual = function(actual, expected) {
  return (actual === expected) ? (`✔✔✔ Assertion Passed: ${actual} === ${expected}`) : (`💥💥💥 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false));
console.log(assertEqual(eqArrays(["1", "2", 3], ["1", "2", 3]), false));
console.log(assertEqual(eqArrays(["abc", "2", 3], ["1", "2", 3]), false));