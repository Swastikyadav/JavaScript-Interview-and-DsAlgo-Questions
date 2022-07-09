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
    // this.insertAt(data, 0);
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
    // return this.getAt(0);
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

    // return this.getAt(this.size() - 1);
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

  // insertLast - Insert a node at the last, create a new tail.
  insertLast(data) {
    const lastNode = new Node(data);
    const currentLastNode = this.getLast();

    if (lastNode) {
      // There are existing nodes in chain.
      currentLastNode.next = lastNode;
    } else {
      // The chain is empty.
      this.head = new Node(data);
    }
  }

  // getAt - Get node at a given index.
  getAt(idx) {
    const nodeArr = [];
    let listNode = this.head;

    if (!listNode) return null;

    while (listNode) {
      nodeArr.push(listNode);
      listNode = listNode.next;
    }

    return nodeArr[idx];
  }

  // removeAt - Remove a node at a given index.
  removeAt(idx) {
    if (!this.head) {
      return;
    }
    
    if (idx === 0) {
      this.removeFirst();
      return;
    };

    const prevNode = this.getAt(idx - 1);
    
    if (!prevNode || !prevNode.next) return;
    
    prevNode.next = prevNode.next.next; 
  }

  // insertAt - Insert the given node at the given index.
  insertAt(data, idx) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (idx === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const prevNode = this.getAt(idx - 1) || this.getLast();
    const newNode = new Node(data, prevNode.next);

    prevNode.next = newNode;
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
// list.removeLast();

list.insertLast(30);

console.log(list);

console.log(list.getAt(1));

list.removeAt(1);

list.insertAt(50, 1);

console.log(list);