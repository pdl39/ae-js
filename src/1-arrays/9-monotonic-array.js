// T: O(n) | S: O(1)
// where n = array length

function isMonotonic(array) {
  if (array.length <= 2) return true;

  let i = 0;
  while (array[i] === array[i + 1]) i++;
  
  if (i === array.length - 1) return true;
  const isNonIncreasing = array[i] > array[i + 1];
  const isNonDecreasing = array[i] < array[i + 1];

  while (i < array.length) {
    const failCondForNonInc = isNonIncreasing ? array[i + 1] > array[i] : undefined;
    const failCondForNonDec = isNonDecreasing ? array[i + 1] < array[i] : undefined;

    if (failCondForNonInc || failCondForNonDec) return false;
    i++;
  }

  return true;
}


/***** TEST *****/
console.log(isMonotonic([1, 1, 2, 1, 1, 1, 1, 1]));
console.log(isMonotonic([1, 1, 2, 2, 2, 2, 5, 5]));
console.log(isMonotonic([5, 4, 3, 3, 3, 3, 2, 1]));
console.log(isMonotonic([5, 4, 3, 3, 4, 3, 2, 1]));
console.log(isMonotonic([5, 5, 5, 5, 5, 5, 5, 7]));
console.log(isMonotonic([5, 5, 5, 5, 5, 5, 5, 2]));
console.log(isMonotonic([5, 5, 5, 5, 5, 5, 2, 7]));
console.log(isMonotonic([5]));
console.log(isMonotonic([]));