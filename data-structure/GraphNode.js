import Queue from './Queue';

export default class GraphNode{
  constructor(val) {
    this.value = val;
    this.edges = [];
  }

  addEdge(vertex) {
    this.edges.push(vertex);
  }

  // bfsWithAction method is meant to be reusable across different actions to implement on each visit in a bfs traversal. Takes 2 required arguments: 1) action, which is a function that represents the action to implement on each visit, and 2) argValue, which is the intial value for the argNode, the first argument to the action function. It can also have additional arguments that represent any additional arguments for the action function, in addition to the argNode. argNode is used as the argument to the function to preserve the updated value during the traversal.
  bfsWithAction(action, argValue, ...additionalArgs) {
    if (!this) return;

    const arg = new ArgNode(argValue);

    const queue = new Queue();
    queue.enque(this);

    while (!queue.isEmpty()) {
      const current = queue.dequeue();

      if (current) {
        action(arg, ...additionalArgs);
        for (const edge of this.edges) {
          this.bfs.enque(edge);
        }
      }
    }

    return arg.value;
  }

  getSize() {
    return this.bfsWithAction(this.count, 0);
  }

  getBfsList() {
    return this.bfsWithAction(this.list, []);
  }

  count(argNode) {
    // argNode.value is a number
    argNode.value++;
  }

  list(argNode, value) {
    // argNode.value is an array
    argNode.value.push(value);
  }
}

class ArgNode {
  constructor(val) {
    this.value = val;
  }
}
