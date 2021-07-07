const Queue = require('./Queue');

module.exports = class GraphNode{
  constructor(val) {
    this.value = val;
    this.edges = [];
  }

  addEdges(...vertices) {
    this.edges.push(...vertices);
  }

  // bfsWithAction method is an HOF, meant to be reusable across different actions to implement on each visit in a bfs traversal. It takes 2 required arguments: 1) action, which is a function that represents the action to implement on each visit, and 2) argValue, which is the intial value for the argNode, which is the first argument to the action function. argNode is used as the argument to the action function to preserve the updated value during the traversal.
  // When calling the action function in the loop for each vertex visit, we need to pass in different number/values of any additional arguments depending on what the action is. We take care of that by calling a separate getAdditionalArgs method that takes in 2 arguments, the action and the current vertex node, and returns an array of the additional arguments that need to be passed into the particular action function.
  bfsWithAction(action, argValue) {
    if (!this) return;

    const actionArg = new ArgNode(argValue);

    const queue = new Queue();
    queue.enque(this);

    while (!queue.isEmpty()) {
      const current = queue.dequeue();

      if (current) {
        let additionalArgs = this.getAdditionalArgs(action, current);
        action(actionArg, ...additionalArgs);
        for (const edge of current.edges) {
          queue.enque(edge);
        }
      }
    }

    return actionArg.value;
  }

  getSize() {
    return this.bfsWithAction(this.count, 0);
  }

  getBfsList() {
    return this.bfsWithAction(this.list, []);
  }

  // ACTIONS TO BE PASSED INTO THE bfsWithAction METHOD //
  count(argNode) {
    argNode.value++; // argNode.value is a number
  }

  list(argNode, el) {
    argNode.value.push(el); // argNode.value is an array
  }

  // Method for determining the additional args to be passed into the action; to be used inside bfsWithAction.
  getAdditionalArgs(action, currentNode) {
    switch(action) {
      case this.count:
        return [];
      case this.list:
        return [currentNode.value];
      default:
        console.log(`Error determining additional args for the action ${action}`);
    }
  }
}

class ArgNode {
  constructor(val) {
    this.value = val;
  }
}
