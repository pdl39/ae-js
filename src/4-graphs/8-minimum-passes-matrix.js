/* eslint-disable no-unused-vars */
// T: O() | S: O()
// where

function minimumPassesOfMatrix(matrix) {
  let passCount = 0;
  let negatives = {count: 0};
  const visited = matrix.map(row => row.map(value => 0));

  do {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] >= 0) continue;

        const possibleReturn = convertToPositive(i, j, matrix, visited, negatives);
        if (possibleReturn === -1) return -1;
      }
    }
    passCount++;
    console.log(negatives.count);
    negatives.count = 0;
  } while (negatives.count > 0);

  return passCount;
}

function convertToPositive(i, j, matrix, visited, negatives) {
  negatives.count++;
  const edges = getEdges(i, j, matrix);

  let zeroCount = 0;
  for (const edge of edges) {
    if (edge === 0) zeroCount++;
    if (edge > 0) {
      matrix[i][j] *= -1;
      console.log(matrix[i][j]);
      negatives.count--;
    }
  }
  if (zeroCount === edges.length) return -1;
}

function getEdges(i, j, matrix) {
  let left = matrix[i][j - 1] !== undefined ? matrix[i][j - 1] : null;
  let right = matrix[i][j + 1] !== undefined ? matrix[i][j + 1] : null;
  let up = matrix[i - 1] !== undefined ? matrix[i - 1][j] : null;
  let down = matrix[i + 1] !== undefined ? matrix[i + 1][j] : null;

  return [left, right, up, down].filter(edge => edge !== null);
}


// TEST //
const matrix1 = [
  [0, -2, -1],
  [-5, 2, 0],
  [-6, -2, 0]
];

console.log(minimumPassesOfMatrix(matrix1));
