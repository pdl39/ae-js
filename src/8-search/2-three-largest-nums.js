// One-Pass
// T: O(n) | S: O(1)

function findThreeLargestNumbersOP(array) {
  let threeLargestNums = [-Infinity, -Infinity, -Infinity];

  for (let i = 0; i < array.length; i++) {
    updateThreeLargest(threeLargestNums, array[i]);
  }

  return threeLargestNums;
}

function updateThreeLargest(threeLargest, x) {
  if (x < threeLargest[0]) return;

  if (x >= threeLargest[2]) {
    threeLargest[0] = threeLargest[1];
    threeLargest[1] = threeLargest[2];
    threeLargest[2] = x;
  }
  else if (x >= threeLargest[1]) {
    threeLargest[0] = threeLargest[1];
    threeLargest[1] = x;
  }
  else if (x >= threeLargest[0]) {
    threeLargest[0] = x;
  }
}


console.log(findThreeLargestNumbersOP([6, 1, 5, 100, 2, 3, 4, 8, 16, 91]));
console.log(findThreeLargestNumbersOP([6, 1, 5]));
console.log(findThreeLargestNumbersOP([100, 1000, 10000, 100000, 100000, 100000, 100000, 10000, 1000, 100, 10, 1]));


// Three-Pass
// T: O(n) | S: O(1)

function findThreeLargestNumbers(array) {
  let largest1 = array[0];
  let largest1Idx = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest1) {
      largest1 = array[i];
      largest1Idx = i;
    }
  }

  let largest2 = -Infinity;
  let largest2Idx;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest2 && i !== largest1Idx) {
      largest2 = array[i];
      largest2Idx = i;
    }
  }

  let largest3 = -Infinity;
  let largest3Idx;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest3 && i !== largest1Idx && i !== largest2Idx) {
      largest3 = array[i];
      largest3Idx = i;
    }
  }

  return [largest3, largest2, largest1];
}


console.log(findThreeLargestNumbers([6, 1, 5, 100, 2, 3, 4, 8, 16, 91]));
console.log(findThreeLargestNumbers([6, 1, 5]));
console.log(findThreeLargestNumbers([100, 1000, 10000, 100000, 100000, 100000, 100000, 10000, 1000, 100, 10, 1]));