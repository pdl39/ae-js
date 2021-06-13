// T: O(n) | S: O(h)
// where n = number of nodes in tree, h = height of tree

function heightBalancedBinaryTree(tree) {
  return Boolean(getSubtreeHeight(tree));
}

function getSubtreeHeight(tree) {
  if (!tree) return 0;

  const leftHeight = getSubtreeHeight(tree.left);
  const rightHeight = getSubtreeHeight(tree.right);

  if (leftHeight === null || rightHeight === null) return null;
  if (Math.abs(leftHeight - rightHeight) > 1) return null;
  return Math.max(leftHeight, rightHeight) + 1;
}

  
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


// TEST //
const tree1 = new BinaryTree(1);
tree1.left = new BinaryTree(2);
tree1.right = new BinaryTree(3);
tree1.left.left = new BinaryTree(4);
tree1.left.right = new BinaryTree(5);
tree1.left.right.left = new BinaryTree(7);
tree1.left.right.right = new BinaryTree(8);
tree1.right.right = new BinaryTree(6);

console.log(heightBalancedBinaryTree(tree1));