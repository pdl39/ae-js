// T: O(n^2) | S: O(1)
// For selection sort, best case time is also O(n^2), 
// since it just iterates through each unsorted subarray even if the array is already sorted.

function selectionSort(array) {
  let unsortedStart = 0;

  while (unsortedStart < array.length - 1) {
    let minOfUnsorted = array[unsortedStart];
    let minIdx = unsortedStart;
    for (let i = unsortedStart + 1; i < array.length; i++) {
      if (array[i] < minOfUnsorted) {
        minOfUnsorted = array[i];
        minIdx = i;
      }
    }
    swapArrEl(array, minIdx, unsortedStart);
    unsortedStart++;
  }

  return array;
}

function swapArrEl(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}



/***** TEST *****/
console.log(selectionSort([9, 8, 7, 6, 5, 4, 6, 4, 7, 3, 8, 3, 21, 12, 1, 0, 10, 84, 99, 1000, 1000, 1000, 1001]));
console.log(selectionSort([10, 10, 10, 10, 10, 10, 9, 8, 9, 8, 9, 8, 9, 1, 1, 2, 1, 2, 3, 4, 1, 1, 4, 4, 6, 0, 0, 1]));
console.log(selectionSort([1, 2, 3, 4, 5, 6, 7]));
console.log(selectionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(selectionSort([1, 2, 3, 10, 3, 2, 5, 3, 11, 1901, 389, 944, 4, 5, 1000, 6, 799]));
console.log(selectionSort([1000, 100, 1111, 2222, 3333, 1901, 2920, 9390, 100, 1000]));
console.log(selectionSort([1, 2, 1000, 100, 100, 1000, 1000, 100, 10, 100, 10, 100, 3, 10, 3, 2, 5, 3, 11, 1901, 389, 944, 4, 5, 1000, 6]));