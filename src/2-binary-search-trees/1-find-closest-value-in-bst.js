// Recursive
// AVERAGE CASE - T: O(logn) | S: O(logn)
// WORST CASE - T: O(n) | S: O(n)
function findClosestValueInBst2(tree, target) {
  return findClosestValueInBst2Helper(tree, target, tree.value);
}

function findClosestValueInBst2Helper(tree, target, closestVal) {
  if (tree === null) return closestVal;
  if (tree === tree.value) return tree.value;

  if (Math.abs(target - tree.value) < Math.abs(target - closestVal)) {
    closestVal = tree.value;
  }

  if (target < tree.value) {
    return findClosestValueInBst2Helper(tree.left, target, closestVal);
  } else {
    return findClosestValueInBst2Helper(tree.right, target, closestVal);
  }
}

// Iterative
// AVERAGE CASE - T: O(logn) | S: O(1)
// WORST CASE - T: O(n) | S: O(1)
function findClosestValueInBst(tree, target) {
  let node = tree;
  let closestVal = node.value;

  while (node) {
    if (target === node.value) return node.value;

    if (target < node.value) {
      node = node.left;
    } else {
      node = node.right;
    }

    if (node !== null) {
      if (Math.abs(node.value - target) < Math.abs(closestVal - target)) {
        closestVal = node.value;
      }
    }
  }

  return closestVal;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const bst1 = new BST(10);
bst1.left = new BST(5);
bst1.left.left = new BST(2);
bst1.left.left.left = new BST(1);
bst1.left.right = new BST(5);
bst1.right = new BST(15);
bst1.right.left = new BST(13);
bst1.right.left.right = new BST(14);
bst1.right.right = new BST(22);

console.log(findClosestValueInBst(bst1, 12));
console.log(findClosestValueInBst2(bst1, 12));
