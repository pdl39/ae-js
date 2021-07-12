const River = require("../../data-structure/GraphNode");

// Using matrix of equal size to keep track of visited nodes
// T: O(w*h) | S: O(w*h)
// where w = matrix width, h = matrix height

function riverSizes(matrix) {
  const riverSizesArr = [];
  const visited = matrix.map(row => row.map(value => false));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0 || visited[i][j]) continue;

      exploreRiver(i, j, matrix, visited, riverSizesArr);
    }
  }

  return riverSizesArr;
}

function exploreRiver(i, j, matrix, visited, riverSizesArr) {
  let currentRiverSize = 0;
  let nodesToExplore = [[i, j]];

  while (nodesToExplore.length) {
    const currentNode = nodesToExplore.pop();
    const i = currentNode[0];
    const j = currentNode[1];

    visited[i][j] = true;
    currentRiverSize++;

    const edges = getNonZeroEdges(currentNode, matrix);

    edges.forEach(edge => {
      const i = edge[0], j = edge[1];
      if (!visited[i][j]) {
        nodesToExplore.push(edge);
        visited[i][j] = true;
      }
    });
  }
  riverSizesArr.push(currentRiverSize);
}

function getNonZeroEdges(currentNode, matrix) {
  const i = currentNode[0];
  const j = currentNode[1];

  let left = matrix[i][j - 1] ? [i, j - 1] : null;
  let right = matrix[i][j + 1] ? [i, j + 1] : null;
  let up = matrix[i - 1] && matrix[i - 1][j] ? [i - 1, j] : null;
  let down = matrix[i + 1] && matrix[i + 1][j] ? [i + 1, j] : null;

  const edgesInclNull = [left, right, up, down];
  return edgesInclNull.filter(edge => edge !== null);
}



// T: O(w*h) | S: O(w*h)
// where w = matrix width, h = matrix height
// we iterate through each slot of the matrix (w*h)

// for each slot,
// - if the slot is seen, skip (dp) --> free
// - else, recurse through its edges, if edge is not seen and is 1. add edges to the seen map.
//   --> each recursive call takes 1 work + max 4 recursive calls for each edge

// max w*h space needed for the seen map.


function riverSizes1(matrix) {
  const matrixW = matrix[0].length;
  const matrixH = matrix.length;

  const rivers = [];
  const seenSlots = {};

  for (let row = 0; row < matrixH; row++) {
    for (let col = 0; col < matrixW; col++) {
      const slotValue = matrix[row][col];
      const slotKey = `${row}-${col}`;

      if (slotValue === 0 || seenSlots[slotKey]) continue;
      const newRiver = new River(slotKey);
      rivers.push(newRiver);

      addRiverEdges(newRiver, row, col, matrix, seenSlots, rivers);
    }
  }

  return rivers.map(river => river.getSize());
}

function addRiverEdges(currentRiverSlot, row, col, matrix, seenSlots, rivers) {
  const slotKey = `${row}-${col}`;
  seenSlots[slotKey] = currentRiverSlot;

  const edges = getEdges(row, col, matrix);
  if (edges.length === 0) return;

  for (const edge of edges) {
    const edgeKey = `${edge.row}-${edge.col}`;
    if (!seenSlots[edgeKey] && edge.value === 1) {
      const newEdge = new River(edgeKey);
      currentRiverSlot.addEdges(newEdge);
      addRiverEdges(newEdge, edge.row, edge.col, matrix, seenSlots, rivers);
    }
  }
}

function getEdges(row, col, matrix) {
  let left = matrix[row][col - 1] ? createEdgeObj(row, col - 1, matrix) : null;
  let right = matrix[row][col + 1] ? createEdgeObj(row, col + 1, matrix) : null;
  let up = matrix[row - 1] ? createEdgeObj(row - 1, col, matrix) : null;
  let down = matrix[row + 1] ? createEdgeObj(row + 1, col, matrix) : null;

  const edgesInclNull = [left, right, up, down];
  return edgesInclNull.filter(edge => edge !== null);
}

function createEdgeObj(row, col, matrix) {
  return {
    value: matrix[row][col],
    row: row,
    col: col
  }
}



// TEST //
const matrix1 = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1]
]
const matrix2 = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0],
  [1, 0, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1]
]
const matrix3 = [
  [0, 0, 0, 1, 0],
  [1, 0, 1, 1, 0],
  [0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1]
]

console.log(riverSizes1(matrix1));
console.log(riverSizes1(matrix2));
console.log(riverSizes1(matrix3));

console.log(riverSizes(matrix1));
console.log(riverSizes(matrix2));
console.log(riverSizes(matrix3));
