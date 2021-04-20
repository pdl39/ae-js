// T: O(n) | S: O(n)
// where n = array length

function hasSingleCycle(array, startIdx = 0) {
  const graph = new Map();
  let i = startIdx;
  let count = array.length;

  while (count > 0) {
    let pointingTo;
  
    if (array[i] > 0 && i + (array[i] % array.length) >= array.length) {
      pointingTo = (array[i] % array.length) - (array.length - 1 - i) - 1;
    }
    else if (array[i] < 0 && i + (array[i] % array.length) < 0) {
      pointingTo = array.length + ((array[i] % array.length) + i);
    }
    else {
      pointingTo = i + (array[i] % array.length);
    }

    if (!graph.has(pointingTo)) {
      graph.set(pointingTo, 1);
    }
    else {
      return false;
    }

    i = pointingTo;
    count--;
  }

  console.log(graph);

  return true;
}

// console.log(generateGraph([2,3,1,-4,-4,2], 5));
console.log(generateGraph([10, 11, -6, -23, -2, 3, 88, 908, -26], 0));