// T: O(n) | S: O(n)
// where n = array length

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