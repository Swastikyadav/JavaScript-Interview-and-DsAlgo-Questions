/*
  1. Create a node class. The constuctor should accept an argument that gets assigned to the data property and initialize an empty array for storing children. The node class should have methods 'add' and 'remove'.

  2. Create a tree class. The tree constuctor should initialize a 'root' property to null.

  3. Implement 'traverseBFS' and 'traverseDFS' on the trees class.
*/

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  // Add a new node to the children of current node.
  add(data) {
    this.children.push(new Node(data));
  }

  // Remove a data from the children of current node.
  remove(data) {
    const filteredChildren = this.children.filter(
      node => node.data !== data
    );

    this.children = filteredChildren;
  }
};

class Tree {
  constructor() {
    this.root = null;
  }
};