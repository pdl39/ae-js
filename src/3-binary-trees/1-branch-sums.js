
// T: O(n) | S: O(h) where h = height of the binary tree.
function branchSums(root) {
  return branchSumsHelper(root, 0, []);
}

function branchSumsHelper(tree, sum, sumsArr) {
  if (!tree) return false;

  let updatedSum = sum + tree.value;
  let hasLeftChild = branchSumsHelper(tree.left, updatedSum, sumsArr);
  let hasRightChild = branchSumsHelper(tree.right, updatedSum, sumsArr);
  if (!hasLeftChild && !hasRightChild) {
    sumsArr.push(updatedSum);
  }

  return sumsArr;
}