const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("should return 'hello', 'goodbye' and 'See ya later'", () => {
    assert.deepEqual(flatten(["hello", ["goodbye", "See ya later"]]), ["hello","goodbye", "See ya later"]);
  });
  it("should return [1,2,3]", () => {
    assert.deepEqual(flatten([1,[2,3]]), [1,2,3]);
  });
});