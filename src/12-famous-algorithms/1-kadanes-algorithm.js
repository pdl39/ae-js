// T: O(n) | S: O(1)
// where n = array length

function kadanesAlgorithm(arr) {
  // Kadane's Algorithm uses Dynamic Programming to find the maximum sum of subarrays of adjacent elements

  // if all numbers in arr are positive, the max sum will be the sum of the subarray containing all elements of arr (subarray = arr)

  // If negative number(s) exist, we need an algorithm to efficiently find the max sum that will be reached by summing the numbers of a particular subarray of the original array arr, where the elements are consecutive.

  // Kadanes algorithm formula:
  // For each index i of arr, keep track of the sum up to index i: sum up to i - i plus arr[i]. However, if arr[i] > sum(up to i - 1) + arr[i], we will retain arr[i], instead of the sum up to i: we are essentially keeping track of the current max value (max at i) for each index i.
  // And for each index i, we also keep track of the cumulative max up to i. This will be max(current max at i, cumulative max up to i - 1)
  // the max sum will be the final cumulative max value

  let currentMax = arr[0];
  let finalMax = currentMax;

  for (let i = 1; i < arr.length; i++) {
    currentMax = Math.max(currentMax + arr[i], arr[i]);
    finalMax = Math.max(currentMax, finalMax);
  }

  return finalMax;
}


// TEST //
const arr1 = [3, 4, -9, 4, 3, 6, -2, -3, 1, 0, -11, 7];
const arr2 = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];


console.log(kadanesAlgorithm(arr1));
console.log(kadanesAlgorithm(arr2));
