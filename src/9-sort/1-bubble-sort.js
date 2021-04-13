// T: O(n^2) | S: O(1)

function bubbleSort(array) {

  for (let i = 0, j = array.length; i < j; j--) {
    let current = i;
    let next = current + 1;
    let swapCount = 0;

    while (next < j) {
      if(array[current] > array[next]) {
        swapArrEl(array, current, next);
        swapCount++;
      }
      current++;
      next++;
    }

    if (swapCount === 0) break;
  }

  return array;
}

function swapArrEl(array, idxA, idxB) {
  [array[idxA], array[idxB]] = [array[idxB], array[idxA]];
}

console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7]));
console.log(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(bubbleSort([1, 2, 3, 10, 3, 2, 5, 3, 11, 1901, 389, 944, 4, 5, 1000, 6, 799]));
console.log(bubbleSort([1000, 100, 1111, 2222, 3333, 1901, 2920, 9390, 100, 1000]));
console.log(bubbleSort([1, 2, 1000, 100, 100, 1000, 1000, 100, 10, 100, 10, 100, 3, 10, 3, 2, 5, 3, 11, 1901, 389, 944, 4, 5, 1000, 6]));