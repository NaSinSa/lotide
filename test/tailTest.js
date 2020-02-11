// const assertEqual = require("../assertEqual");
const tail = require("../tail");
const assert = require('chai').assert;

// const words = [];
// console.log(tail(words));
// console.log(assertEqual(words.length, 0));

describe("#tail", () => {
  it("should return 'goodbye' and 'See ya later'", () => {
    assert.deepEqual(tail(["hello", "goodbye", "See ya later"]), ["goodbye", "See ya later"]);
  });
  it("should return []", () => {
    assert.deepEqual(tail([]), []);
  });
});