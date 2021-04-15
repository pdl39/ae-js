// Optimal
// T: O(nlogn + mlogm) | S: O(1)
// where n = arrayOne length, m = arrayTwo length

function smallestDifference2(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let minDiff = Math.abs(arrayOne[0] - arrayTwo[0]);
  let idx1, idx2;

  let i = 0;
  let j = 0;
  while (i < arrayOne.length && j < arrayTwo.length) {
    const num1 = arrayOne[i];
    const num2 = arrayTwo[j];
    const diff = Math.abs(num1 - num2);

    if (num1 === num2) return [num1, num2];

    if (diff < minDiff) {
      minDiff = diff;
      idx1 = i;
      idx2 = j;
    }
    if (num1 < num2) i++; 
    else j++;
  }

  return [arrayOne[idx1], arrayTwo[idx2]];
}


// Brute force
// T: O(n*m) | S: O(1)
// where n = arrayOne length, m = arrayTwo length

function smallestDifference(arrayOne, arrayTwo) {
  let minDiff = Infinity;
  let idx1, idx2;

  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      const diff = Math.abs(arrayOne[i] - arrayTwo[j]);
      if (diff < minDiff) {
        minDiff = diff;
        idx1 = i;
        idx2 = j;
      }
    }
  }

  return [arrayOne[idx1], arrayTwo[idx2]];
}



arrOne1 = [-1, 5, 10, 20, 28, 3];
arrTwo1 = [26, 134, 135, 15, 17];
console.log(smallestDifference(arrOne1, arrTwo1));
console.log(smallestDifference2(arrOne1, arrTwo1));

arrOne2 = [-5, -4, -1, 0, 2, 3];
arrTwo2 = [-10, -8, -2, 15, 17];
console.log(smallestDifference(arrOne2, arrTwo2));
console.log(smallestDifference2(arrOne2, arrTwo2));