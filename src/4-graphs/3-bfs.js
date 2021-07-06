// T: O(v + e) | S: O(v)
// where v = number of vertices in graph, e = number of edges in graph


class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    if (!this) return;

    const bfsQueue = new Queue();
    bfsQueue.enque(this);

    while (!bfsQueue.isEmpty()) {
      const currentNode = bfsQueue.dequeue();

      if (currentNode) {
        array.push(currentNode.name);
        for (const child of currentNode.children) {
          bfsQueue.enque(child);
        }
      }
    }

    return array;
  }
}


class Queue {
  constructor() {
    this.first = null;
    this.next = null;
    this.last = null;
    this.length = 0;
  }

  enque(node) {
    if (this.length === 0) {
      this.first = node;
      this.last = this.first;
    }
    else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
  }

  dequeue() {
    const dequeuedNode = this.first;
    if (this.first.next) {
      this.first = this.first.next;
    }
    this.length--;
    return dequeuedNode;
  }

  isEmpty() {
    return this.length === 0;
  }
}


// TEST //
const graph1 = new Node('A');
const node1 = new Node('B');
const node2 = new Node('C');
const node3 = new Node('D');
const node4 = new Node('E');
const node5 = new Node('F');
const node6 = new Node('G');
const node7 = new Node('H');
const node8 = new Node('I');
const node9 = new Node('J');
const node10 = new Node('K');

graph1.children.push(node1, node2);
node1.children.push(node3, node4);
node2.children.push(node5, node6);
node3.children.push(node7, node8);
node4.children.push(node9, node10);


console.log(graph1.breadthFirstSearch([]));
