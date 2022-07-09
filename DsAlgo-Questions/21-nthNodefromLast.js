/*
  Given a linked list and integer n, return the element n spaces from the last node in the list. Do not call the 'size' method of the linked list. Assume that n will be less than the length of the list.

  --Examples

  const list = new List();
  const.insertLast('a');
  const.insertLast('b');
  const.insertLast('c');
  const.insertLast('d');

  fromLast(list, 2).data; // 'b'
*/

// -------------------------------------------

// Solution 1
function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getFirst();
  let phase = 1;

  while (fast.next) {
    if (phase === 1) {
      fast = list.getAt(n);

      phase = 2;
    } else if (phase === 2) {
      slow = slow.next;
      fast = fast.next;
    }
  }

  return slow;
}

// Solution 2
function fromLast2(list, n) {
  let slow = list.getFirst();
  let fast = list.getFirst();
  
  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

// -------------------------------------------

// Solution technique:
/*
  - Phase 1
    - Both 'slow' and 'fast' pointers will be at first node.
    - Move 'fast' by n points, and don't move the 'slow' pointer.
  
  - Phase 2
    - Now 'slow' pointer is n nodes behind the 'fast' pointer.
    - Now for each iteration move the both pointers by 1 node.
    - When 'fast' is at lastNode, 'slow' must be at nth node from the last.
*/