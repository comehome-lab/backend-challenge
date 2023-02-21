const assert = require('assert');
const indexOfMin = require('./');

describe('index-of-min', function() {
  const arr = [13, 56, 98, 12, 1, 44, 5];

  it('will return the index of the min element of array', () => {
    assert.equal(indexOfMin(arr), arr.indexOf(Math.min(...arr)));
  });
});
