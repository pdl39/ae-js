import Node from './_Node';

export default class TreeNode extends Node {
  constructor(val) {
    super(val);
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}
