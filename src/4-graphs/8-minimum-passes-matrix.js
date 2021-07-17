/* eslint-disable no-unused-vars */
const Queue = require('../../data-structure/Queue');

// T: O(w*h) | S: O(w*h)
// where w = matrix width, h = matrix height

function minimumPassesOfMatrix(matrix) {
  let passCount = 0;
  const visited = matrix.map(row => row.map(value => false));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] > 0) {
        const currentPassCount = bfsTraverse(i, j, matrix, visited);
        passCount = Math.max(passCount, currentPassCount);
      }
    }
  }

  // one more iteration to check if any non-converted negatives remain
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] < 0 && !visited[i][j]) {
        return -1;
      }
    }
  }

  return passCount;
}

function bfsTraverse(i, j, matrix, visited) {
  let currentLevelCount = 0;
  const bfsQ = new Queue();
  bfsQ.enque([i, j]);

  while (!bfsQ.isEmpty()) {
    const bfsQLen = bfsQ.length;
    console.log({bfsQLen})

    for (let n = 0; n < bfsQLen; n++) {
      const currentSlot = bfsQ.dequeue().value;
      console.log({currentSlot});
      const i = currentSlot[0];
      const j = currentSlot[1];
      const unvisitedNegNeighbors = getUnvisitedNegNeighbors(i, j, matrix, visited);

      for (const neighbor of unvisitedNegNeighbors) {
        bfsQ.enque(neighbor);
        visited[neighbor[0]][neighbor[1]] = true;
      }
    }
    currentLevelCount++;
    console.log({currentLevelCount})
  }

  return currentLevelCount - 1;
}

function getUnvisitedNegNeighbors(i, j, matrix, visited) {
  let left = matrix[i][j - 1] < 0 && !visited[i][j - 1] ? [i, j - 1] : null;
  let right = matrix[i][j + 1] < 0 && !visited[i][j + 1] ? [i, j + 1] : null;
  let up = matrix[i - 1] && matrix[i - 1][j] < 0 && !visited[i - 1][j] ? [i - 1, j] : null;
  let down = matrix[i + 1] && matrix[i + 1][j] < 0 && !visited[i + 1][j] ? [i + 1, j] : null;
  return [left, right, up, down].filter(neighbor => neighbor !== null);
}


// T: O(x*w*h) | S: O(w*h)
// where w = matrix width, h = matrix height, x = number of passes

function minimumPassesOfMatrix1(matrix) {
  let passCount = 0;
  let negatives = {count: 0, numConverted: 0, remaining: {}, convertedNegatives: {}};

  do {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] >= 0) continue;

        const possibleReturn = convertToPositive(i, j, matrix, negatives);
        if (possibleReturn === -1) return -1;
      }
    }
    if (negatives.numConverted === 0) return 0;
    passCount++;
    negatives.convertedNegatives = {};
  } while (negatives.count > 0);

  return passCount;
}

function convertToPositive(i, j, matrix, negatives) {
  if (!negatives.remaining[`${i}-${j}`]) negatives.count++;
  const edges = getEdges(i, j, matrix);

  let zeroCount = 0;
  for (const edge of edges) {
    let edgeVal = matrix[edge[0]][edge[1]];
    const edgeWasNotConverted = !negatives.convertedNegatives[`${edge[0]}-${edge[1]}`] && !negatives.convertedNegatives[`${i}-${j}`];

    if (edgeVal === 0) zeroCount++;
    if (edgeVal > 0 && edgeWasNotConverted) {
      negatives.convertedNegatives[`${i}-${j}`] = matrix[i][j];
      matrix[i][j] *= -1;
      negatives.numConverted++;
      negatives.count--;
      delete negatives.remaining[`${i}-${j}`];
      return;
    }
  }
  negatives.remaining[`${i}-${j}`] = matrix[i][j];
  if (zeroCount === edges.length) return -1;
}

function getEdges(i, j, matrix) {
  let left = matrix[i][j - 1] !== undefined ? [i, j - 1] : null;
  let right = matrix[i][j + 1] !== undefined ? [i, j + 1] : null;
  let up = matrix[i - 1] !== undefined ? [i - 1, j] : null;
  let down = matrix[i + 1] !== undefined ? [i + 1, j] : null;

  return [left, right, up, down].filter(edge => edge !== null);
}


// TEST //
const matrix1 = [
  [0, -2, -1],
  [-5, 2, 0],
  [-6, -2, 0]
];
const matrix2 = [
  [0, -2, -1, 0],
  [-5, 0, 0, 1],
  [-6, -2, 1, 0]
];
const matrix3 = [
  [ 1,  0,  0, -2, -3],
  [-4, -5, -6, -2, -1],
  [ 0,  0,  0,  0, -1],
  [ 1,  2,  3,  0,  3]
]

// console.log(minimumPassesOfMatrix1(matrix1));
// console.log(minimumPassesOfMatrix1(matrix2));
console.log(minimumPassesOfMatrix(matrix1));
console.log(minimumPassesOfMatrix(matrix2));
console.log(minimumPassesOfMatrix(matrix3));
