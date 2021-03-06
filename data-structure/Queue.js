const Node = require('./_Node');

module.exports = class Queue {
  constructor() {
    this.first = null;
    this.next = null;
    this.last = null;
    this.length = 0;
  }

  enque(value) {
    const node = new Node(value);
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
