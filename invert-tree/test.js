const assert = require('assert');
const invertTree = require('./');

describe('invert-tree', () => {
  it('inverts a binary tree', () => {
    const root = {value: 6};
    const left = {value: 4};
    const right = {value: 8};
    const leftOfLeft = {value: 3};
    const rightOfLeft = {value: 5};
    const leftOfRight = {value: 7};
    const rightOfRight = {value: 9};
    root.left = left;
    root.right = right;
    left.left = leftOfLeft;
    left.right = rightOfLeft;
    right.left = leftOfRight;
    right.right = rightOfRight;

    invertTree(root);

    assert.deepEqual(root, {
      "value": 6,
      "left": {
        "value": 8,
        "left": {
          "value": 9
        },
        "right": {
          "value": 7
        }
      },
      "right": {
        "value": 4,
        "left": {
          "value": 5
        },
        "right": {
          "value": 3
        }
      }
    });
  });

  it('inverts a right-leaning asymmetric tree', () => {
    const root = {value: 4};
    const right = {value: 6};
    const rightOfRight = {value: 8};
    root.right = right;
    right.right = rightOfRight;

    invertTree(root);

    assert.deepEqual(JSON.parse(JSON.stringify(root)), {
      "value": 4,
      "left": {
        "value": 6,
        "left": {
          value: 8
        }
      }
    });
  });

  it('inverts a left-leaning asymmetric tree', () => {
    const root = {value: 5};
    const left = {value: 7};
    const leftOfLeft = {value: 9};
    root.left = left;
    left.left = leftOfLeft;

    invertTree(root);

    assert.deepEqual(JSON.parse(JSON.stringify(root)), {
      "value": 5,
      "right": {
        "value": 7,
        "right": {
          value: 9
        }
      }
    });
  });
});
