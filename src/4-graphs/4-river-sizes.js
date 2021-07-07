const River = require("../../data-structure/GraphNode");

// T: O(w*h) | S: O(w*h)
// where w = matrix width, h = matrix height
// we iterate through each slot of the matrix (w*h)

// for each slot,
// - if the slot is seen, skip (dp) --> free
// - else, recurse through its edges, if edge is not seen and is 1. add edges to the seen map.
//   --> each recursive call takes 1 work + max 4 recursive calls for each edge

// max w*h space needed for the seen map.


function riverSizes(matrix) {
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

console.log(riverSizes(matrix1));
console.log(riverSizes(matrix2));
console.log(riverSizes(matrix3));








// const river = new River('A');
// const river1 = new River('B');
// const river2 = new River('C');
// const river3 = new River('D');
// const river4 = new River('E');
// const river5 = new River('F');
// const river6 = new River('G');
// const river7 = new River('H');
// const river8 = new River('I');
// const river9 = new River('J');
// const river10 = new River('K');

// river.addEdges(river1, river2);
// river1.addEdges(river3, river4);
// river2.addEdges(river5, river6);
// river3.addEdges(river7, river8);
// river4.addEdges(river9, river10);


// console.log(river.getSize());
// console.log(river.getBfsList());
