// Optimized, using parent property
// T: O(h) | S: O(1)
// where h = height of tree


// Optimized Version2 (better)
function findSuccessorO2(tree, node) { // another view
  // 2 cases:
  // case 1: node has a right subtree -> successor = first node in the right subtree with no left child.
  // case 2: node has no right subtree -> successor = the parent of the first node in its ancestry that is a left child.
  // -> if there is no node in the ancestry who is a left child, then the node is the last node in in-order traversal; successor = null.

  if (node.right) return getSuccessorFromRight(node.right);
  return getSucessorFromAncestor(node);
}

function getSuccessorFromRight(node) {
  let currentNode = node;
  while (currentNode.left) {
    currentNode = currentNode.left;
  }
  return currentNode;
}

function getSucessorFromAncestor(node) {
  let currentNode = node;
  while (currentNode.parent && currentNode.parent.right === currentNode) {
    currentNode = currentNode.parent;
  }
  return currentNode.parent;
}


// Optimized Version1
function findSuccessorO1(tree, node) {
  // For in-order traversal, there are 4 cases for successor:
  // case 1: node has a right child that has no left child -> successor = its right child
  // case 2: node has a right child that has a left child -> successor = its left descendant with no left child
  // case 3: node has no right child and is a left child -> successor = its parent
  // case 4: node has no right child and is a right child -> successor = the parent of its ancestor that is a left child
  // all other cases: successor = none.
  
  if (node.right) {
    let leftDescendant = node.right.left;
    if (!leftDescendant) return node.right; // case 1

    while (leftDescendant) { // case 2
      if (!leftDescendant.left) return leftDescendant;
      leftDescendant = leftDescendant.left;
    }
  }

  if (node.parent && node.parent.left === node) return node.parent; // case 3

  let ancestor = node.parent; // case 4
  while (ancestor && ancestor.parent) {
    if (ancestor.parent.left === ancestor) return ancestor.parent;
    ancestor = ancestor.parent;
  }

  return null; // all other cases
}


// Using in-order traversal
// T: O(n) | S: O(h)
// where n = number of nodes in tree, h = height of tree

class ResultInfo {
  constructor(isNodeFound, successor = null) {
    this.isNodeFound = isNodeFound;
    this.successor = successor;
  }
}

function findSuccessor1(tree, node) {
  const resultInfo = new ResultInfo(false);
  inOrderTraverseUntil(tree, node, resultInfo);
  return resultInfo.successor;
}

function inOrderTraverseUntil(tree, node, resultInfo) {
  if (!tree) return;
  if (resultInfo.successor) return;
  
  inOrderTraverseUntil(tree.left, node, resultInfo);
  if (resultInfo.isNodeFound) {
    resultInfo.successor = tree;
    resultInfo.isNodeFound = false;
  }
  if (tree === node) resultInfo.isNodeFound = true;
  inOrderTraverseUntil(tree.right, node, resultInfo);
}


class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}


// TEST //
const tree1 = new BinaryTree(1);
tree1.left = new BinaryTree(2);
tree1.right = new BinaryTree(3);
tree1.left.parent = tree1;
tree1.right.parent = tree1;
tree1.left.left = new BinaryTree(4);
tree1.left.right = new BinaryTree(5);
tree1.left.left.parent = tree1.left;
tree1.left.right.parent = tree1.left;
tree1.left.left.left = new BinaryTree(6);
tree1.left.left.left.parent = tree1.left.left;

// console.log(findSuccessor1(tree1, tree1.left.right));
// console.log(findSuccessorO1(tree1, tree1.left.right));
console.log(findSuccessorO2(tree1, tree1.left.right));