const assertEqual = function(actual, expected) {
  return (actual === expected) ? (`✔✔✔ Assertion Passed: ${actual} === ${expected}`) : (`💥💥💥 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(str) {
  let countedLtt = {};
  let noSpace = str.split(" ").join("");
  for (const ele of noSpace) {
    !countedLtt[ele] ? countedLtt[ele] = 1 : countedLtt[ele] += 1;
  }
  return countedLtt;
};