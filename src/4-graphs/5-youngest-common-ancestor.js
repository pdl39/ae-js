// T: O(d) | S: O(1)
// where d = tree depth

class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  let currentNode = descendantOne;
  let desc1Depth = 0, desc2Depth = 0;
  while (currentNode !== topAncestor) {
    desc1Depth++;
    currentNode = currentNode.ancestor;
  }

  currentNode = descendantTwo;
  while (currentNode !== topAncestor) {
    desc2Depth++;
    currentNode = currentNode.ancestor;
  }

  const biggerDepthDesc = desc1Depth >= desc2Depth ? {
    node: descendantOne,
    depth: desc1Depth
  } : {
    node: descendantTwo,
    depth: desc2Depth
  }

  const smallerDepthDesc = desc1Depth < desc2Depth ? {
    node: descendantOne,
    depth: desc1Depth
  } : {
    node: descendantTwo,
    depth: desc2Depth
  }

  while (biggerDepthDesc.depth > smallerDepthDesc.depth) {
    biggerDepthDesc.node = biggerDepthDesc.node.ancestor;
    biggerDepthDesc.depth--;
  }

  if (biggerDepthDesc.node === smallerDepthDesc.node) return biggerDepthDesc.node;

  while (biggerDepthDesc.node.ancestor !== smallerDepthDesc.node.ancestor) {
    biggerDepthDesc.node = biggerDepthDesc.node.ancestor;
    smallerDepthDesc.node = smallerDepthDesc.node.ancestor;
  }

  return biggerDepthDesc.node.ancestor;
}



// TEST //
const a = new AncestralTree('A');
const b = new AncestralTree('B');
const c = new AncestralTree('C');
const d = new AncestralTree('D');
const e = new AncestralTree('E');
const f = new AncestralTree('F');
const g = new AncestralTree('G');
const h = new AncestralTree('H');
const i = new AncestralTree('I');
i.ancestor = d;
h.ancestor = d;
d.ancestor = b;
e.ancestor = b;
f.ancestor = c;
g.ancestor = c;
b.ancestor = a;
c.ancestor = a;

console.log(getYoungestCommonAncestor(a, e, i));
