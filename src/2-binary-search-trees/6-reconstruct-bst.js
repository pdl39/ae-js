// optimized
// t: O(n) | S: O(n)
// where n = input array length (number of new nodes created)
// to be more exact, the time complexity is actually n + k, 
// where k represent the extra number of recursive calls made to check for null child nodes,
// but since k is at most n + 1, the time complexity will be <= 2n + 1, 
// which translates to just O(n).

class BstInfo { // creating a separate BstInfo class with rootIdx property allows keepting track of global rootIdx reference
  constructor(rootIdx) {
    this.rootIdx = rootIdx;
  }
}

function reconstructBst(arr) {
  currentSubtreeInfo = new BstInfo(0);
  return reconstructBstFromRange(arr, -Infinity, Infinity, currentSubtreeInfo);
}

function reconstructBstFromRange(arr, lowerbound, upperbound, currentSubtreeInfo) {
  if (currentSubtreeInfo.rootIdx === arr.length) return null;

  const currentRootValue = arr[currentSubtreeInfo.rootIdx];
  if (currentRootValue < lowerbound || currentRootValue >= upperbound) {
    return null;
  }

  currentSubtreeInfo.rootIdx++;
  const leftSubtree = reconstructBstFromRange(arr, lowerbound, currentRootValue, currentSubtreeInfo);
  const rightSubtree = reconstructBstFromRange(arr, currentRootValue, upperbound, currentSubtreeInfo);
  return new BST(currentRootValue, leftSubtree, rightSubtree);
}


// brute force
// T: O(n^2) | S: O(n)
// where n = input array length (number of new nodes created)
// Time complexity is O(n^2) because there are n recursive calls for each node,
// and each recursive call takes n loop iterations to find the root index of the right subtree.

function reconstructBst1(arr) {
  if (arr.length === 0) return null;

  const currentNodeValue = arr[0];
  let rightSubtreeRootIdx = arr.length; // if no right subtree exists, this will simply be the end of array, used to get the left subtree

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= currentNodeValue) {
      rightSubtreeRootIdx = i;
      break;
    }
  }

  const leftSubtree = reconstructBst(arr.slice(1, rightSubtreeRootIdx));
  const rightSubtree = reconstructBst(arr.slice(rightSubtreeRootIdx));
  return new BST(currentNodeValue, leftSubtree, rightSubtree)
}



function returnPreOrderArr(bst) {
  const arr = [];
  preOrderArrValuesGenerate(bst, arr);
  return arr;
}

function preOrderArrValuesGenerate(bst, arr = []) {
  if (!bst) return null;

  arr.push(bst.value);
  preOrderArrValuesGenerate(bst.left, arr);
  preOrderArrValuesGenerate(bst.right, arr);
}

function preOrderPrint(bst) {
  if (!bst) return null;

  console.log(bst);
  preOrderPrint(bst.left);
  preOrderPrint(bst.right);
}


class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}


// TEST //
arr1 = [10, 4, 2, 1, 5, 17, 19, 18];
arr2 = [10, 4, 2, 1, 3, 5, 6, 9, 7, 17, 19, 18];
arr3 = [10, 4, 2, 1, 3, 5, 5, 6, 5, 5, 9, 7, 17, 19, 18, 18, 19];

// console.log(reconstructBst(arr1));
// console.log(reconstructBst1(arr1));
console.log(returnPreOrderArr(reconstructBst(arr1)));
console.log(returnPreOrderArr(reconstructBst(arr2)));
console.log(returnPreOrderArr(reconstructBst(arr3)));
console.log(preOrderPrint(reconstructBst(arr1)));
// console.log(preOrderPrint(reconstructBst(arr2)));
// console.log(preOrderPrint(reconstructBst(arr3)));
// console.log(returnPreOrderArr(reconstructBst1(arr1)));
// console.log(returnPreOrderArr(reconstructBst1(arr2)));
// console.log(returnPreOrderArr(reconstructBst1(arr3)));
// console.log(preOrderPrint(reconstructBst1(arr1)));
// console.log(preOrderPrint(reconstructBst1(arr2)));
// console.log(preOrderPrint(reconstructBst1(arr3)));