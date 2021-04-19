// T: O(n) | S: O(d)
// where n = number of ndoes in tree, d = depth of tree

function binaryTreeDiameter(tree) {
  return getTreeInfo(tree).diameter;
}

function getTreeInfo(tree) {
  if (!tree) return new TreeInfo(0, 0);

  const leftTreeInfo = getTreeInfo(tree.left);
  const rightTreeInfo = getTreeInfo(tree.right);

  const longestRootPath = leftTreeInfo.height + rightTreeInfo.height;
  const currentMaxDiameter = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);
  const newDiameter = Math.max(longestRootPath, currentMaxDiameter);
  const newHeight = Math.max(leftTreeInfo.height, rightTreeInfo.height) + 1;

  return new TreeInfo(newDiameter, newHeight);
}



class TreeInfo {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
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
tree1.left.left.left = new BinaryTree(6);
tree1.left.left.left.left = new BinaryTree(10);
tree1.left.left.left.right = new BinaryTree(11);
tree1.left.left.right = new BinaryTree(7);
tree1.left.right = new BinaryTree(5);
tree1.left.right.left = new BinaryTree(8);
tree1.left.right.right = new BinaryTree(9);
tree1.left.right.right.right = new BinaryTree(12);
tree1.right = new BinaryTree(3);

console.log(tree1.showArray());
console.log(binaryTreeDiameter(tree1));


const tree2 = new BinaryTree(1);
tree2.left = new BinaryTree(2);
tree2.left.left = new BinaryTree(4);
tree2.left.left.left = new BinaryTree(6);
tree2.left.left.left.left = new BinaryTree(10);
tree2.left.left.left.right = new BinaryTree(11);
tree2.left.left.right = new BinaryTree(7);
tree2.left.right = new BinaryTree(5);
tree2.left.right.left = new BinaryTree(8);
tree2.left.right.left.left = new BinaryTree(13);
tree2.left.right.left.left.left = new BinaryTree(14);
tree2.left.right.left.left.left.right = new BinaryTree(15);
tree2.left.right.right = new BinaryTree(9);
tree2.left.right.right.right = new BinaryTree(12);
tree2.right = new BinaryTree(3);

console.log(tree2.showArray());
console.log(binaryTreeDiameter(tree2));