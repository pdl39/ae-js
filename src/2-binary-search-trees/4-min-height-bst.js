// T: O(n) | S: O(n)
// where n = array length (number of nodes)
/* This method is basically same as the second method, but with much cleaner code. */

function minHeightBst3(array) {
  return minHeightBstHelper3(array, 0, array.length - 1);
}

function minHeightBstHelper3(array, low, high) {
  if (low > high) return null;

  const mid = Math.floor((low + high) / 2);
  const bst = new BST(array[mid]);

  bst.left = minHeightBstHelper3(array, low, mid - 1);
  bst.right = minHeightBstHelper3(array, mid + 1, high);

  return bst;
}


// T: O(n) | S: O(n)
// where n = array length (number of nodes)
/* This method improves on time by manually adding each node as either left or right node
of the current node, instead of outright using the given insert method for each node. */

function minHeightBst2(array) {
  return minHeightBstHelper2(array, 0, array.length - 1);
}

function minHeightBstHelper2(array, low, high, tree = null) {
  if (low > high) return;

  const mid = Math.floor((low + high) / 2);
  const valueToAdd = array[mid];
  const newNode = new BST(valueToAdd);

  if (!tree) {
    tree = newNode;
  }
  else {
    if (valueToAdd < tree.value) {
      tree.left = newNode;
      tree = tree.left;
    }
    else {
      tree.right = newNode;
      tree = tree.right;
    }
  }

  minHeightBstHelper2(array, low, mid - 1, tree);
  minHeightBstHelper2(array, mid + 1, high, tree);

  return tree;
}



// T: O(nlogn) | S: O(n)
// where n = array length (number of nodes)
/* This method has O(nlogn) time because for each node, 
we are using the BST's insert method, which takes logn time. */

function minHeightBst(array) {
  let mid = Math.floor((array.length - 1) / 2);
  const minhbst = new BST(array[mid]);

  minHeightBstHelper(minhbst, array, 0, mid - 1);
  minHeightBstHelper(minhbst, array, mid + 1, array.length - 1);
  return minhbst;
}

function minHeightBstHelper(tree, array, low, high) {
  if (low > high) return;
  let mid = Math.floor((low + high) / 2);
  tree.insert(array[mid]);

  minHeightBstHelper(tree, array, low, mid - 1);
  minHeightBstHelper(tree, array, mid + 1, high);
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}



console.log(minHeightBst([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(minHeightBst2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(minHeightBst3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));