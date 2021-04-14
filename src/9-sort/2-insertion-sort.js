// T: O(n^2) | S: O(1)

function insertionSort(array) {
  let j = 1;
  while (j < array.length) {
    for (let i = j - 1; i >= 0; i--) {
      if (array[i + 1] < array[i]) {
        swapArrEl(array, i, i + 1);
      }
    }
    j++;
  }
  return array;
}

function swapArrEl(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}


/***** TEST *****/
console.log(insertionSort([9, 8, 7, 6, 5, 4, 6, 4, 7, 3, 8, 3, 21, 12, 1, 0, 10, 84, 99, 1000, 1000, 1000, 1001]));
console.log(insertionSort([10, 10, 10, 10, 10, 10, 9, 8, 9, 8, 9, 8, 9, 1, 1, 2, 1, 2, 3, 4, 1, 1, 4, 4, 6, 0, 0, 1]));