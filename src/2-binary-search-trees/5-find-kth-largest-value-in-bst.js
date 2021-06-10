// optimized - reverse in order traversal
// T: O(h + k) | S: O(max(h, k))
// where k = kth largest node in BST, h = height of BST

function findKthLargestValueInBst (tree, k) {
  const sortedNodes = [];
  reverseOrderTraverse(tree, sortedNodes, k);
  return sortedNodes[k - 1];
}

function reverseOrderTraverse(tree, arr, k) {
  if (!tree || arr.length >= k) return;

  reverseOrderTraverse(tree.right, arr, k);
  arr.push(tree.value);
  reverseOrderTraverse(tree.left, arr, k);
}



// brute force - in order traversal
// T: O(n) | S: O(n)
// where n = number nodes in BST

function findKthLargestValueInBst1(tree, k) {
  const sortedNodes = [];
  inOrderTraverse(tree, sortedNodes);
  const indexOfSecondLargest = sortedNodes.length - k;
  return sortedNodes[indexOfSecondLargest];
}

function inOrderTraverse(tree, arr) {
  if (!tree) return;

  inOrderTraverse(tree.left, arr);
  arr.push(tree.value);
  inOrderTraverse(tree.right, arr);
}


class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


// TEST //
const bst1 = new BST(15);
bst1.left = new BST(5);
bst1.left.left = new BST(2);
bst1.left.right = new BST(5);
bst1.left.left.left = new BST(1);
bst1.left.left.right = new BST(3);
bst1.right = new BST(20);
bst1.right.left = new BST(17);
bst1.right.right = new BST(22);

console.log(findKthLargestValueInBst1(bst1, 2));
console.log(findKthLargestValueInBst(bst1, 2));