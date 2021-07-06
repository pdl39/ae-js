import Node from './_Node';

export default class GraphNode extends Node {
  constructor(val) {
    super(val);
    this.edges = [];
  }

  addEdge(vertex) {
    this.edges.push(vertex)
  }
}
