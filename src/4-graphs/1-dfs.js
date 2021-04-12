// DFS
// T: O(v + e) | S: O(v), where v = # of vertices, e = # of edges in the graph.

class Graph {
  constructor(name) {
    this.name = name;
    this.adjVertices = [];
  }

  addAdjVertex(name) {
    this.adjVertices.push(new Graph(name));
    return this;
  }

  dfs(array) {
    array.push(this.name);
    for (const adjVertex of this.adjVertices) {
      adjVertex.dfs(array);
    }
    return array;
  }

  // dfs(array) {
  //   let visited = new Map();
  //   let currentNode = this;
  //   this.dfsHelper(currentNode, visited, array);
  //   return array;
  // }

  // dfsHelper(currentNode, visitedMap, array) {
  //   if (!visitedMap.has(currentNode)) {
  //     array.push(currentNode.name);
  //     visitedMap.set(currentNode, true);
  //     for (let adjVertex of currentNode.adjVertices) {
  //       this.dfsHelper(adjVertex, visitedMap, array);
  //     }
  //   }
  // }
}

const newG = new Graph("A");
newG.addAdjVertex("B");
newG.addAdjVertex("C");
newG.addAdjVertex("D");
newG.addAdjVertex("D-2");
newG.adjVertices[0].addAdjVertex("E");
newG.adjVertices[0].addAdjVertex("F");
newG.adjVertices[1].addAdjVertex("G");
newG.adjVertices[1].addAdjVertex("H");
newG.adjVertices[2].addAdjVertex("I");
newG.adjVertices[2].addAdjVertex("J");
newG.adjVertices[3].addAdjVertex("K");
newG.adjVertices[3].addAdjVertex("L");
newG.adjVertices[3].addAdjVertex("M");
newG.adjVertices[0].adjVertices[0].addAdjVertex("N");
newG.adjVertices[0].adjVertices[1].addAdjVertex("O");
newG.adjVertices[1].adjVertices[0].addAdjVertex("P");
newG.adjVertices[1].adjVertices[1].addAdjVertex("Q");
newG.adjVertices[2].adjVertices[0].addAdjVertex("R");
newG.adjVertices[2].adjVertices[1].addAdjVertex("S");
newG.adjVertices[3].adjVertices[0].addAdjVertex("T");
newG.adjVertices[3].adjVertices[1].addAdjVertex("U");
newG.adjVertices[3].adjVertices[2].addAdjVertex("V");

console.log(newG);

console.log(newG.dfs([]));