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

  // GetFirst - Returns the first node (the head) in the linked list.
  getFirst() {
    return this.head;
  }

  // GetLast - Return the last node (the tail) in the linked list.
  getLast() {
    let listNode = this.head;

    if (!this.head) return null;

    while (listNode) {
      if (!listNode.next) return listNode;

      listNode = listNode.next;
    }

    return listNode;
  }

  // Clear - Clears all the node, size becomes 0.
  clear() {
    this.head = null;
  }

  // RemoveFirst - Removes the first node and sets the head to second node.
  removeFirst() {
    if (!this.head) return;

    this.head = this.head.next;
  }

  // RemoveLast - Removes the last node (the tail).
  removeLast() {
    let currentNode = this.head;
    let previousNode = null;

    if (!this.head) return null;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = null;
  }
}

// -------------------------

const nodeOne = new Node(5);
const list = new LinkedList();

list.head = nodeOne;
list.insertFirst(15);

console.log(list);
// console.log(list.size());
// console.log(list.getFirst());
// console.log(list.getLast());

// list.clear();
// list.removeFirst();
list.removeLast();

console.log(list);