// T: O(w*h) | S: O(w*h)
// where w = matrix width, h = matrix height

function removeIslands(matrix) {
  const islands = [];
  const visited = matrix.map(row => row.map(value => false));

  for (let i = 1; i < matrix.length - 1; i++) {
    for (let j = 1; j < matrix[0].length - 1; j++) {
      const islandCondition = getIslandCondition(i, j, matrix, visited);
      if (!islandCondition) continue;

      getIsland(i, j, matrix, visited, islands);
    }
  }

  islands.forEach(island => island.forEach(slot => {
    matrix[slot[0]][slot[1]] = 0;
  }));

  return matrix;
}

function getIsland(i, j, matrix, visited, islands) {
  const newIsland = [];
  const nodesToExplore = [[i, j]];
  let includesMatrixBoundary = false;

  while (nodesToExplore.length) {
    const currentNode = nodesToExplore.pop();
    const i = currentNode[0];
    const j = currentNode[1];

    visited[i][j] = true;
    newIsland.push(currentNode);

    console.log({currentNode})
    console.log({nodesToExplore})

    const edges = getNonZeroEdges(i, j, matrix);
    edges.forEach(edge => {
      const i = edge[0];
      const j = edge[1];
      if (isMatrixBoundary(i, j, matrix)) includesMatrixBoundary = true;

      if (!visited[i][j]) {
        nodesToExplore.push(edge);
        visited[edge[0]][edge[1]] = true;
      }
    });
  }

  if (!includesMatrixBoundary && newIsland.length) islands.push(newIsland);
}

function getNonZeroEdges(i, j, matrix) {
  let left = matrix[i][j - 1] ? [i, j - 1] : null;
  let up = matrix[i - 1] && matrix[i - 1][j] ? [i - 1, j] : null;
  let right = matrix[i][j + 1] ? [i, j + 1] : null;
  let down = matrix[i + 1] && matrix[i + 1][j] ? [i + 1, j] : null;
  return [left, up, right, down].filter(edge => edge !== null);
}

function getIslandCondition(i, j, matrix, visited) {
  if (visited[i][j] || matrix[i][j] === 0) return false;

  let islandCondition = true;
  if (i === 1 && matrix[i - 1][j] !== 0) islandCondition = false;
  if (j === 1 && matrix[i][j - 1] !== 0) islandCondition = false;
  if (i === matrix.length - 2 && matrix[i + 1][j] !== 0) islandCondition = false;
  if (j === matrix[0].length - 2 && matrix[i][j + 1] !== 0) islandCondition = false;
  return islandCondition;
}

function isMatrixBoundary(i, j, matrix) {
  if (i === 0 || j === 0) return true;
  if (i === matrix.length - 1 || j === matrix[0].length - 1) return true;
  return false;
}



// TEST //
const matrix1 = [
  [0, 1, 1, 0, 0, 0],
  [1, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0],
  [1, 0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1, 0],
  [1, 0, 0, 1, 0, 0]
];

const matrix2 = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1]
]

console.log(removeIslands(matrix1));
console.log(removeIslands(matrix2));
