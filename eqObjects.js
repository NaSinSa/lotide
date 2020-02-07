const assertEqual = function(actual, expected) {
  return (actual === expected) ? (`✔✔✔ Assertion Passed: ${actual} === ${expected}`) : (`💥💥💥 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    let firstCheck = object1[key];
    let secondCheck = object2[key];
    if (Array.isArray(firstCheck)) {
      if (!eqArrays(firstCheck, secondCheck)) {
        return false;
      }
    } else if (typeof firstCheck !== "object" && firstCheck !== secondCheck) {
      return false;
    } else {
      return eqObjects(firstCheck, secondCheck);
    }
  }
  return true;
};
