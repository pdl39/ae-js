// T: O(n), S: O(h), where h = height(depth) of the tree.

function nodeDepths(root, runningDepth = -1) {
  if (root) {
    let depth = runningDepth + 1;
    return nodeDepths(root.left, depth) + nodeDepths(root.right, depth) + depth;
  }
  return 0;
}