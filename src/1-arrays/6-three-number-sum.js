// T: O(n^2) | S: O(n)
// where n = # of integer elements in the array

function threeNumberSum2(array, targetSum) {
  array.sort((a, b) => a - b);
  const triplets = [];

  for (let i = 0; i < array.length; i++) {
    let l = i + 1;
    let h = array.length - 1;

    while (l < h) {
      const el = array[i];
      const comp = targetSum - el;
      const lel = array[l];
      const hel = array[h];

      if (lel + hel === comp) {
        triplets.push([el, lel, hel]);
        l++;
        h--;
      }
      else if (lel + hel < comp) l++;
      else if (lel + hel > comp) h--;
    }

  }

  return triplets;
}


// T: O(n^3) | S: O(n)
// where n = # of integer elements in the array

function threeNumberSum(array, targetSum) {
  let triplets = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] === targetSum) {
          triplets.push([array[i], array[j], array[k]]);
        }
      }
    }
  }

  if (triplets.length === 0) return triplets;

  for (let triplet of triplets) {
    triplet.sort((a, b) => a - b);
  }

  triplets.sort(sortArrofArrs);

  return triplets;
}

function sortArrofArrs(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) continue;
    return a[i] - b[i];
  }
}


/***** TEST *****/
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
console.log(threeNumberSum([9, 2, 0, 5, 3, 1, -11, 21], 11));
// console.log(threeNumberSum2([10, 0, 1, 1, 0, 10, 10, 0, 10, 1, 0, 1], 11));
// console.log(threeNumberSum([10, 0, 0, 5, 5, 0, 9, 0, 1, 8, 1, 1, 5, 3, 2, 6, 3, 1], 10));

console.log('\n');

console.log(threeNumberSum2([12, 3, 1, 2, -6, 5, -8, 6], 0));
console.log(threeNumberSum2([9, 2, 0, 5, 3, 1, -11, 21], 11));
// console.log(threeNumberSum2([10, 0, 1, 1, 0, 10, 10, 0, 10, 1, 0, 1], 11));
// console.log(threeNumberSum2([10, 0, 0, 5, 5, 0, 9, 0, 1, 8, 1, 1, 5, 3, 2, 6, 3, 1], 10));