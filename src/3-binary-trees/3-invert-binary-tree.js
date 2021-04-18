// T: O(n) | S: O(d)
// where n = number of nodes in tree, d = max depth of tree

function invertBinaryTree(tree) {
  swapTreeNodes(tree);
  return tree;
}

function swapTreeNodes(tree) {
  if (tree) {
    const temp = tree.right;
    tree.right = tree.left;
    tree.left = temp;
    swapTreeNodes(tree.left);
    swapTreeNodes(tree.right);
  }
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  showArray() {
    const arr = [];

    this.preOrderPush(arr, this);
    return arr;
  }

  preOrderPush(array, currentNode) {
    if (currentNode) {
      const leftVal = currentNode.left ? currentNode.left.value : null;
      const rightVal = currentNode.right ? currentNode.right.value : null;
      array.push({"node": currentNode.value, "left": leftVal, "right": rightVal});
      this.preOrderPush(array, currentNode.left);
      this.preOrderPush(array, currentNode.right);
    }
  }
}




const tree1 = new BinaryTree(1);
tree1.left = new BinaryTree(2);
tree1.left.left = new BinaryTree(4);
tree1.left.left.left = new BinaryTree(8);
tree1.left.left.right = new BinaryTree(9);
tree1.left.right = new BinaryTree(5);
tree1.right = new BinaryTree(3);
tree1.right.left = new BinaryTree(6);
tree1.right.right = new BinaryTree(7);

console.log(invertBinaryTree(tree1).showArray());


const tree2 = new BinaryTree(1);
tree2.left = new BinaryTree(2);
tree2.left.left = new BinaryTree(4);
tree2.left.left.left = new BinaryTree(8);
tree2.left.left.right = new BinaryTree(9);
tree2.left.right = new BinaryTree(5);
tree2.left.right.left = new BinaryTree(10);
tree2.left.right.right = new BinaryTree(11);
tree2.right = new BinaryTree(3);
tree2.right.left = new BinaryTree(6);
tree2.right.right = new BinaryTree(7);

console.log(invertBinaryTree(tree2).showArray());