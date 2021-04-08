// T: O(n) | S: O(h) where h = the height of the tree
function validateBst(tree) {
  return validateBstHelper(tree, -Infinity, +Infinity);
}

function validateBstHelper(tree, min, max) {
  if (!tree) return true;
  if (tree.value < min || tree.value >= max) return false;
  let isLeftValid = validateBstHelper(tree.left, min, tree.value);
  let isRightValid = validateBstHelper(tree.right, tree.value, max);
  return isLeftValid && isRightValid;
}