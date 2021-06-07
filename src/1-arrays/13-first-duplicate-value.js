// Improved space complexity
// T: O(n) | S: O(1)

function firstDuplicateValue(arr) {
  for (const value of arr) {
    const absVal = Math.abs(value);
    if (arr[absVal - 1] < 0) return absVal;
    arr[absVal - 1] *= -1;
  }
  return -1;
}


// T: O(n) | S: O(n)
// where n = array length

function firstDuplicateValue1(arr) {
  const seenNums = new Set();
  for (const num of arr) {
    if (seenNums.has(num)) {
      return num;
    }
    else {
      seenNums.add(num);
    }
  }
  return -1;
}


// TEST //
arr1 = [2, 1, 5, 2, 3, 3, 4];
arr11 = [2, 1, 5, 4, 3, 7, 6];
arr2 = [1, 1, 5, 4, 5, 5, 5, 5, 5, 1];
arr3 = [1, 2, 3, 6, 4, 7, 3, 2, 1];
console.log(firstDuplicateValue1(arr1));
console.log(firstDuplicateValue1(arr11));
console.log(firstDuplicateValue1(arr2));
console.log(firstDuplicateValue1(arr3));
console.log(firstDuplicateValue(arr1));
console.log(firstDuplicateValue(arr11));
console.log(firstDuplicateValue(arr2));
console.log(firstDuplicateValue(arr3));
