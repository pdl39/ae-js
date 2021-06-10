// sort first method
// T: O(nlogn) | S: O(n)

function mergeOverlappingIntervals(arr) {
  const sortedArr = arr.sort((a, b) => a[0] - b[0]);
  const result = [];
  let currentStart = sortedArr[0][0];
  let currentEnd = sortedArr[0][1];

  for (let i = 1; i < sortedArr.length; i++) {
    const overlap = sortedArr[i][0] <= currentEnd;
    if (!overlap) {
        result.push([currentStart, currentEnd]);
        currentStart = sortedArr[i][0];
        currentEnd = sortedArr[i][1];
    }
    else {
      currentEnd = Math.max(currentEnd, sortedArr[i][1]);
    }

    if (i === sortedArr.length - 1) {
      result.push([currentStart, currentEnd]);
    }
  }
  return result;
}


// TEST //
const arr1 = [
  [1,2], [3, 5], [4, 7], [11, 13], [16, 17], [6, 6], [12,13], [13, 15]
];

const arr2 = [
  [43, 49], [9,12], [12, 54], [45, 90], [91, 93]
];

const arr3 = [
  [2, 3], [4, 5], [6, 7], [8, 9], [1, 10]
];

console.log(mergeOverlappingIntervals(arr1));
console.log(mergeOverlappingIntervals(arr2));
console.log(mergeOverlappingIntervals(arr3));