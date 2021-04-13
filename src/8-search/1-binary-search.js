// Recursive
// T: O(logn) | S: O(logn)

function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(array, target, low, high) {
  if (low > high) return -1;

  const mid = Math.floor((low + high) / 2);
  const currentEl = array[mid];

  if (target === currentEl) return mid;
  if (target < currentEl) {
    return binarySearchHelper(array, target, low, mid - 1);
  }
  else {
    return binarySearchHelper(array, target, mid + 1, high);
  }
}


// Iterative
// T: O(logn) | S: O(1)

function binarySearchIter(array, target) {
  return binarySearchHelperIter(array, target, 0, array.length - 1);
}

function binarySearchHelperIter(array, target, low, high) {
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const currentEl = array[mid];
    if (target === currentEl) return mid;
    if (target < currentEl) {
      high = mid - 1;
    }
    else {
      low = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 0));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 7));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 11));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 10, 19, 55], 19));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 10, 19, 55], 100));

console.log("\n");

console.log(binarySearchIter([1, 2, 3, 4, 5, 6, 7, 8], 0));
console.log(binarySearchIter([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(binarySearchIter([1, 2, 3, 4, 5, 6, 7, 8], 7));
console.log(binarySearchIter([1, 2, 3, 4, 5, 6, 7, 8], 11));
console.log(binarySearchIter([1, 2, 3, 4, 5, 6, 7, 8, 10, 19, 55], 19));
console.log(binarySearchIter([1, 2, 3, 4, 5, 6, 7, 8, 10, 19, 55], 100));