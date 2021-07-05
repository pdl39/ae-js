// Use matrix (2-D array) and map get cummulative count for each slot (starting from source)
// Optimized space complexity
// T: O(w*h) | S: O(min(w, h));
// where w = width, h = height

function numberOfWaysToTraverseGraph3(width, height) {
  const smallerSide = width < height ? width : height;
  const biggerSide = width >= height ? widht : height;

  //
  const currentSide =

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
