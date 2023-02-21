Here's the basic usage of the file that you'll be creating:

```js
const invertTree = require('./'); // <- this is the file you make

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

console.log(root.left.left.value); // should be 9
```

More info: https://en.wikipedia.org/?title=Binary_tree  
