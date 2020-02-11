// const assertEqual = function(actual, expected) {
//   return (actual === expected) ? (`✔✔✔ Assertion Passed: ${actual} === ${expected}`) : (`💥💥💥 Assertion Failed: ${actual} !== ${expected}`);
// };


const countOnly = function(allItems, itemsToCount) {
  let countedItems = {};
  for (const ele of allItems) {
    if (itemsToCount[ele] && !countedItems[ele]) {
      countedItems[ele] = 1;
    } else if (itemsToCount[ele] && countedItems[ele]) {
      countedItems[ele] += 1;
    }
  }
  return countedItems;
};

module.exports = countOnly;