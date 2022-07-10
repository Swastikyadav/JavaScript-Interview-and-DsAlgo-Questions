/*
  Given a node, validate the binary search tree, ensuring that every node's left hand child is less than the parent node's value, and that every node's right hand child is greater than  the parent.
*/

function validateBinarySearchTree(node, min=null, max=null) {
  if (max !== null && node.data > max) {
    return false;
  }

  if (min !== null && node.data < min) {
    return false;
  }

  if (node.left && !validateBinarySearchTree(node.left, min, node.data)) {
    return false;
  }

  if (node.right && !validateBinarySearchTree(node.right, node.data, max)) {
    return false;
  }

  return true;
}

// This solution use recurtion and I don't like it.