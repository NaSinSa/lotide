const assertEqual = function(actual, expected) {
  return (actual === expected) ? ("✔✔✔ Assertion Passed: " + actual + " === " + expected) : ("💥💥💥 Assertion Failed: " + actual + " !== " + expected);
};

console.log(assertEqual("da", "d"));