/*
  1. Create a node class. The constuctor should accept an argument that gets assigned to the data property and initialize an empty array for storing children. The node class should have methods 'add' and 'remove'.

  2. Create a tree class. The tree constuctor should initialize a 'root' property to null.

  3. Implement 'traverseBFS' and 'traverseDFS' on the trees class. Each method should accept a function that gets called with each element in the tree.
*/

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  // Add a new node to the children of current node.
  add(data, children=[]) {
    const newNode = new Node(data);
    children.forEach(elm => {
      newNode.children.push(new Node(elm));
    });

    this.children.push(newNode);
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
  constructor(root) {
    this.root = root || null;
  }

  // Breadth first search (horizontal search)
  traverseBFS(callback) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();

      // The key difference - Adding childrens to the end of array.
      arr.push(...node.children);
      callback(node);
    }
  }

  // Depth first search (vertical serach)
  traverseDFS(callback) {
    // this.root.children.forEach(node => {
    //   callback(node);
      
    //   const newTree = new Tree(node);

    //   newTree.traverseDFS(callback);
    // });

    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();

      // The key difference - Adding childrens to the start of array.
      arr.unshift(...node.children);
      callback(node);
    }
  }
};

const node = new Node(20);

node.add(0, [12, -2, 1]);
node.add(40);
node.add(-15, [-2]);

const tree = new Tree(node);

tree.traverseBFS((node) => console.log(node.data));
console.log("-------------");
tree.traverseDFS((node) => console.log(node.data));