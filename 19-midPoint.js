/*
  Return the 'middle' node of a linked list.
  If the list has an even number of elements, return the node at the end of the first half of the list.

  *Do not* use a counter variable, *do not* retrive the size of the list, and only iterate through the list one time.

  --Example

  const l = new LinkedList();
  l.insertLast('a');
  l.insertLast('b');
  l.insertLast('c');

  midPoint(l); // returns { data: 'b' };
*/

// -----------------------------------------------

const oddArr = [4, 7, 5, 9, 2, 47, 11]; // 9
const evenArr = [4, 7, 5, 9, 2, 47] // 5

function midPoint(arr) {
  let slow = 0;
  let fast = 0;

  while (arr[fast + 2]) {
    slow += 1;
    fast += 2;
  }

  return arr[slow];
}

console.log(midPoint(oddArr)); // 9
console.log(midPoint(evenArr)); // 5

// -----------------------------------------------

// Solution technique:
// We will use 2 pointer variables 'slow' and 'fast'.
// With each iteration slow will move ahead by 1 and fast will move ahead by 2.
// 'fast' will move twice as fast as 'slow'.
// So, when 'fast' will point to the last node, 'slow' must be pointing to the middle node.