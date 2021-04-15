// T: O(n) | S: O(1)
// where n = array length

function moveElementToEnd2(array, toMove) {
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    while ( i < j && array[j] === toMove) j--;
    if (array[i] === toMove) swapArrEl(array, i, j);
    i++;
  }

  return array;
}

// Slightly different implementation:
function moveElementToEnd(array, toMove) {
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    if (array[i] === toMove) {
      if (array[j] !== toMove) {
        swapArrEl(array, i, j);
        i++;
        j--;
      }
      else j--;
    }
    else i++;
  }

  return array;
}

function swapArrEl(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}



/***** TEST *****/
console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
console.log(moveElementToEnd([2, 1, 2, 2, 1, 3, 4, 2], 1));
console.log(moveElementToEnd([2, 1, 2, 2, 0, 0, 0, 0], 0));
console.log(moveElementToEnd([0, 1, 2, 2, 0, 0, 0, 0], 0));

console.log('\n');

console.log(moveElementToEnd2([2, 1, 2, 2, 2, 3, 4, 2], 2));
console.log(moveElementToEnd2([2, 1, 2, 2, 1, 3, 4, 2], 1));
console.log(moveElementToEnd2([2, 1, 2, 2, 0, 0, 0, 0], 0));
console.log(moveElementToEnd2([0, 1, 2, 2, 0, 0, 0, 0], 0));