/*
  Given a linked list, return true if the list is circular, false it it is not.

  --Examples

  const l = new List();
  
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');

  l.head = a;
  a.next = b;
  b.next = c;
  c.next = b;

  circular(l); // true
*/

// ---------------------------------

function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    if (fast === slow) { // Check for same object reference.
      return true;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
}

// ---------------------------------

// Solution Technique:
/*
  - We will use the same 2 pointer technique we used in the last question.
  - If both 'slow' and 'fast' variables are pointing to the same node, then list is a circular linkedList.
*/