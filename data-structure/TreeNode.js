export default class TreeNode {
  constructor(val) {
    this.value = val;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}
