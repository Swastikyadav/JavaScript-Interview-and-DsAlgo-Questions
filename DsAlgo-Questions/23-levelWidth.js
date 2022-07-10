/*
  Given the array of a tree, return an array where each element is the width of the tree at each level.

  --Example
  Given:

        0
      / | \
     1  2  3
     |     |
     4     5

  Answer: [1, 3, 2]
*/

function levelWidth(root) {
  const counterArr = [0];
  const arr = [root, null];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === null) {
      counterArr.push(0);
      arr.push(null);
    } else {
      arr.push(...node.children);
      counterArr[counterArr.length - 1]++;
    }
  }

  return counterArr;
}

// Solution technique: Breadth first search with a stoper (null) pointer / variable.