class Graph {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Graph(name));
    return this;
  }

  dfs(array) {
    let visited = new Map();
    let currentNode = this;
    this.dfsHelper(currentNode, visited, array);
    return array;
  }

  dfsHelper(currentNode, visitedMap, array) {
    if (!visitedMap.has(currentNode)) {
      array.push(currentNode.name);
      visitedMap.set(currentNode, true);
      for (let child of currentNode.children) {
        this.dfsHelper(child, visitedMap, array);
      }
    }
  }
}

const newG = new Graph("A");
newG.addChild("B");
newG.addChild("C");
newG.addChild("D");
newG.addChild("D-2");
newG.children[0].addChild("E");
newG.children[0].addChild("F");
newG.children[1].addChild("G");
newG.children[1].addChild("H");
newG.children[2].addChild("I");
newG.children[2].addChild("J");
newG.children[3].addChild("K");
newG.children[3].addChild("L");
newG.children[3].addChild("M");
newG.children[0].children[0].addChild("N");
newG.children[0].children[1].addChild("O");
newG.children[1].children[0].addChild("P");
newG.children[1].children[1].addChild("Q");
newG.children[2].children[0].addChild("R");
newG.children[2].children[1].addChild("S");
newG.children[3].children[0].addChild("T");
newG.children[3].children[1].addChild("U");
newG.children[3].children[2].addChild("V");

console.log(newG);

console.log(newG.dfs([]));