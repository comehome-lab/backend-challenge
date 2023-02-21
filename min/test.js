const assert = require('assert');
const min = require('./');

describe('min', function() {
  const arr = [13, 56, 98, 12, 1, 44, 5];

  it('will return the min element of array', () => {
    assert.equal(min(arr), Math.min(...arr));
  });

  // write more tests
});
