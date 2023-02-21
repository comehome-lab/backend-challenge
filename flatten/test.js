const assert = require('assert');
const flatten = require('./');

describe('flatten', () => {
  const arr = [1, [2], [3, 4, [5]]];

  it('will return another array', () => {
    assert.notEqual(flatten(arr), arr);
  });

  it('will flatten an simple array', () => {
    assert.deepEqual(flatten([1, 2, 3, 4, [5]]), [1, 2, 3, 4, 5]);
  });

  it('will flatten an array', () => {
    assert.deepEqual(flatten(arr), [1, 2, 3, 4, 5]);
  });
});
