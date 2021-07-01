// Use matrix (2-D array) and map path from start point to target
// T: O(w*h) | S: O(w*h)
// where w = width, h = height

function numberOfWaysToTraverseGraph(width, height) {
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
console.log(numberOfWaysToTraverseGraph(2, 3));
console.log(numberOfWaysToTraverseGraph(3, 4));
