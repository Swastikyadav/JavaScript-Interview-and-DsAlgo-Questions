/*
  Linked list is a data structure, which unlike arrays dont't have to keep next node in consecutive memory.

  Next node can be kept anywhere in the memory, and the current node have the reference to that next node.

  The first node is called the 'head' and the last node is called the 'tail'.

  Each node have two arguments:
    - data
    - next node reference ('null' for the last node, the tail)
*/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert first (Assign the resulting node to the head)
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  // Size method - Return the number of nodes in the linked list.
  size() {
    let listSize = 0;
    let listNode = this.head;

    while (listNode) {
      listSize++;
      listNode = listNode.next;
    }

    return listSize;
  }
}

// -------------------------

const nodeOne = new Node(5);
const list = new LinkedList();

list.head = nodeOne;
list.insertFirst(15);

console.log(list);
console.log(list.size());