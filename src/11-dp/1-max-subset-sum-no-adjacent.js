// T: O(n) | S: O(1)
// where n = array length

function maxSubsetSumNoAdjacent(array) {
  let prevMax = array[0];
  let prev2Max = 0;

  for (let i = 1; i < array.length; i++) {
    const currentMax = Math.max(prevMax, prev2Max + array[i]);
    prev2Max = prevMax;
    prevMax = currentMax;
  }

  return prevMax;
}


console.log(maxSubsetSumNoAdjacent([1, 2, 3, 4, 5, 6, 7]));