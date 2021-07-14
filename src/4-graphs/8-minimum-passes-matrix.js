/* eslint-disable no-unused-vars */
// T: O(x*w*h) | S: O(w*h)
// where w = matrix width, h = matrix height, x = number of passes

function minimumPassesOfMatrix(matrix) {
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

console.log(minimumPassesOfMatrix(matrix1));
