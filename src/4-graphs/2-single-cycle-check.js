// T: O(n) | S: O(1)
// where n = array length

function hasSingleCycle2(array) {
  let currentIdx = 0;
  let remainingCount = array.length;
  while (remainingCount > 0) {
    if (remainingCount < array.length && currentIdx === 0) return false;
    currentIdx = getNextIdx(currentIdx, array);
    remainingCount--;
  }

  return currentIdx === 0;
}

function getNextIdx(currentIdx, array) {
  const jump = array[currentIdx];
  const nextIdx = (currentIdx + jump) % array.length;
  return nextIdx >= 0 ? nextIdx : array.length + nextIdx; 
}


// T: O(n) | S: O(n)
// where n = array length

function hasSingleCycle(array, startIdx = 0) {
  const graph = new Map();
  let currentIdx = startIdx;
  let count = array.length;

  while (count > 0) {
    const jump = array[currentIdx];
    let pointingTo = (currentIdx + jump) % array.length;
    pointingTo = pointingTo >= 0 ? pointingTo : array.length + pointingTo;

    if (!graph.has(pointingTo)) graph.set(pointingTo, 1);
    else return false;

    currentIdx = pointingTo;
    count--;
  }

  return true;
}

console.log(hasSingleCycle([2,3,1,-4,-4,2]));
console.log(hasSingleCycle2([2,3,1,-4,-4,2]));
console.log(hasSingleCycle([2,3,1,-4,-4,1]));
console.log(hasSingleCycle2([2,3,1,-4,-4,1]));
console.log(hasSingleCycle([10, 11, -6, -23, -2, 3, 88, 908, -26], 0));
console.log(hasSingleCycle2([10, 11, -6, -23, -2, 3, 88, 908, -26], 0));