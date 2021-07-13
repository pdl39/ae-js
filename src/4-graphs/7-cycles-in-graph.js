// T: O(v + e) | S: O(v)
// where v = number of vertex in graphm, e = number of edges in graph
// keep track of vertices as either 0 = unvisited, 1 = visited but on stack, 2 = visited and finished. If we re-encounter a visited vertex that is still on stack, it means this vertex is an ancestor of the current vertex and thus we have a cycle.

function cycleInGraph(edges) {
  const visited = new Array(edges.length).fill(0);

  // can't use forEach method, because we need to skip already visited nodes and break from the loop when we encounter the first cycle and return the result.
  for (const vertex in edges) {
    if (visited[vertex] === 2) continue;
    if (visited[vertex] === 1) return true;
    // also, we check for visited vertex values before the recursive call so that we can avoid unnecessary work and immediately return result when we encounter the result condition.

    const hasCycle = visitEdges(vertex, edges, visited);
    if (hasCycle) return true;
  }

  return false;
}

function visitEdges(vertex, edges, visited) {
  visited[vertex] = 1;

  const neighbors = edges[vertex];
  console.log({vertex, neighbors})
  for (let i = 0; i < neighbors.length; i++) {
    const neighbor = neighbors[i];

    if (visited[neighbor] === 2) continue;
    if (visited[neighbor] === 1) return true;
    const hasCycle = visitEdges(neighbor, edges, visited);
    if (hasCycle) return true;
  }

  visited[vertex] = 2;
  return false;
}


// TEST //
const edges1 = [
  [1, 3],
  [2, 3, 4],
  [0],
  [],
  [2, 5],
  []
];
const edges2 = [
  [1, 2],
  [3, 5, 4],
  [3],
  [],
  [3, 2],
  []
];
const edges3 = [
  [1],
  [2],
  [3],
  [4],
  []
]

// console.log(cycleInGraph(edges1));
console.log(cycleInGraph(edges2));
// console.log(cycleInGraph(edges3));
