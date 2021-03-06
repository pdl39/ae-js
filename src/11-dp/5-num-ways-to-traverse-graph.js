// Mathematical Trick - permutation logic
// Most efficient solution
// T: O(w+h) | S: O(1)
// where w = width, h = height
// factorial of (w+h) requires w+h multiplication operations

function numberOfWaysToTraverseGraph6(width, height) {
  // number of ways to go from (1, 1) to (width, height)
  // = number of permutations for combining right and down movements from (1, 1) to reach (width, height)

  // Total # of right movements = width - 1
  // Total # of down movements = height - 1
  // e.g. for (w = 3, h = 4), the max right movements you can make  = 2 and the max down movement you can make = 3
  // a path from (1, 1) to (3, 4) can be:
  // R -> R -> D -> D -> D
  // We must find the number of permutations this path can take,
  // e.g. R -> D -> R -> D -> D, D -> D -> R -> D -> R, etc.,
  // which will give us the number of ways to reach our target.


  // Base case: if either width or height === 1, there's only one way
  if (width === 1 || height === 1) return 1;

  // Using permutation
  const maxRightMove = width - 1;
  const maxDownMove = height - 1;

  // Permutation formula:
  const numerator = factorial(maxRightMove + maxDownMove);
  const denominator = factorial(maxRightMove) * factorial(maxDownMove);
  return Math.round(numerator / denominator);
}

function factorial(n) {
  let k = 1;

  for (let i = 2; i <= n; i++) {
    k *= i;
  }

  return k;
}


// Recursion widh DP
// T: O(w*h) | S: O(w+h)
// where w = width, h = height;
// w+h is the max height of the recursion tree

function numberOfWaysToTraverseGraph5(width, height) {
  const cache = {};
  const currentKey = JSON.stringify([width, height]);
  // retrieving memoized call from cache --> free work
  if (cache[currentKey]) return cache[currentKey];

  // non-memoized recusive call
  if (width === 1 || height === 1) {
    cache[currentKey] = 1;
  }
  else {
    cache[currentKey] = numberOfWaysToTraverseGraph5(width - 1, height) + numberOfWaysToTraverseGraph5(width, height - 1);
  }
  return cache[currentKey];
}


// Recursion
// T: O(2^(w+h)) | S: O(w+h)
// where w = width, h = height;
// w+h is the max height of the recursion tree

function numberOfWaysToTraverseGraph4(width, height) {
  if (width === 1 || height === 1) return 1;
  return numberOfWaysToTraverseGraph4(width - 1, height) + numberOfWaysToTraverseGraph4(width, height - 1);
}


// Use matrix (2-D array) and map get cummulative count for each slot (starting from source)
// Optimized space complexity
// T: O(w*h) | S: O(min(w, h));
// where w = width, h = height

function numberOfWaysToTraverseGraph3(width, height) {
  const smallerSide = width < height ? width : height;
  const biggerSide = width >= height ? width : height;

  // If width is smaller, traverse horizontally (rows)
  // If height is smaller, traverse vertically (columns)
  let currentSide = new Array(smallerSide);
  let prevSide = null;

  for (let biggerSideIdx = 0; biggerSideIdx < biggerSide; biggerSideIdx++) {
    prevSide = currentSide;
    currentSide = new Array(smallerSide);

    for (let smallerSideIdx = 0; smallerSideIdx < smallerSide; smallerSideIdx++) {
      if (smallerSideIdx === 0 || biggerSideIdx === 0) {
        currentSide[smallerSideIdx] = 1;
      }
      else {
        const leftOrUpSlot1 = currentSide[smallerSideIdx - 1];
        const leftOrUpSlot2 = prevSide[smallerSideIdx];
        currentSide[smallerSideIdx] = leftOrUpSlot1 + leftOrUpSlot2;
      }
    }
  }

  return currentSide[currentSide.length - 1];

  // Below is the version where we always traverse horizontally:
  // let currRow = new Array(width).fill(1);
  // let prevRow = null;

  // for (let row = 1; row < height; row++) {
  //   prevRow = currRow;
  //   currRow = new Array(width);

  //   for (let col = 0; col < width; col++) {
  //     if (col === 0) {
  //       currRow[col] = 1;
  //     }
  //     else {
  //       const leftSlot = currRow[col - 1];
  //       const upSlot = prevRow[col];
  //       currRow[col] = leftSlot + upSlot;
  //     }
  //   }
  // }

  // return currRow[currRow.length - 1];
}


// Use matrix (2-D array) and map get cummulative count for each slot (starting from source)
// Better implementation over starting from target using separte nodes to track count and neighbors for each.
// T: O(w*h) | S: O(w*h)
// where w = width, h = height

function numberOfWaysToTraverseGraph2(width, height) {
  // Create matrix
  const matrix = new Array(height);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(width).fill(0);
  }

  for (let wIdx = 0; wIdx < width; wIdx++) {
    for (let hIdx = 0; hIdx < height; hIdx++) {
      if (wIdx === 0 || hIdx === 0) {
        matrix[wIdx][hIdx] = 1;
      }
      else {
        const slotUp = matrix[wIdx][hIdx - 1];
        const slotLeft = matrix[wIdx - 1][hIdx];
        matrix[wIdx][hIdx] = slotUp + slotLeft;
      }
    }
  }

  return matrix[width - 1][height - 1];
}


// Use matrix (2-D array) and map path from start point to target (starting from target)
// T: O(w*h) | S: O(w*h)
// where w = width, h = height

function numberOfWaysToTraverseGraph1(width, height) {
  // Create matrix
  const matrix = new Array(height);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(width);
  }

  // DP loop
  let neighbors = null;
  matrix[height - 1][width - 1] = new Node(neighbors);

  for (let row = height - 1; row >= 0; row--) {
    for (let col = width - 1; col >= 0; col--) {
      if (row === height - 1 && col === width - 1) {
        continue;
      }
      else if (row === height - 1) {
        neighbors = [matrix[row][col + 1]];
      }
      else if (col === width - 1) {
        neighbors = [matrix[row + 1][col]];
      }
      else {
        neighbors = [matrix[row][col + 1], matrix[row + 1][col]];
      }

      matrix[row][col] = new Node(neighbors);
      matrix[row][col].count = sumNeighborsCount(neighbors);
    }
  }

  return matrix[0][0].count;
}

class Node {
  constructor(neighbors) {
    this.count = neighbors ? neighbors.count : 1;
    this.neighbors = neighbors;
  }
}

const sumNeighborsCount = function(neighbors) {
  let sum = 0;
  neighbors.forEach(neighbor => sum += neighbor.count);
  return sum;
}


// TEST //
console.log('numberOfWasToTraverGraph 1');
console.log(numberOfWaysToTraverseGraph1(2, 3));
console.log(numberOfWaysToTraverseGraph1(3, 4));
console.log(numberOfWaysToTraverseGraph1(5, 6));

console.log('numberOfWasToTraverGraph 2');
console.log(numberOfWaysToTraverseGraph2(2, 3));
console.log(numberOfWaysToTraverseGraph2(3, 4));
console.log(numberOfWaysToTraverseGraph2(5, 6));

console.log('numberOfWasToTraverGraph 3');
console.log(numberOfWaysToTraverseGraph3(2, 3));
console.log(numberOfWaysToTraverseGraph3(3, 4));
console.log(numberOfWaysToTraverseGraph3(5, 6));

console.log('numberOfWasToTraverGraph 4');
console.log(numberOfWaysToTraverseGraph4(2, 3));
console.log(numberOfWaysToTraverseGraph4(3, 4));
console.log(numberOfWaysToTraverseGraph4(5, 6));

console.log('numberOfWasToTraverGraph 5');
console.log(numberOfWaysToTraverseGraph5(2, 3));
console.log(numberOfWaysToTraverseGraph5(3, 4));
console.log(numberOfWaysToTraverseGraph5(5, 6));

console.log('numberOfWasToTraverGraph 6');
console.log(numberOfWaysToTraverseGraph6(2, 3));
console.log(numberOfWaysToTraverseGraph6(3, 4));
console.log(numberOfWaysToTraverseGraph6(5, 6));
