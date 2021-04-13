// 

// T: O(n) | S: O(d)
// where n = number of total integer elements, d = max depth of special arrays.

function productSum(array, depth = 1) {
  let sum = 0;
  for (const el of array) {
    if (typeof el === "number") {
      // console.log({depth, sum, el});
      sum += el;
      // console.log({depth, sum}, "typeof el: ", typeof el);
    }
    else {
      sum += (depth + 1) * productSum(el, depth + 1);
      // console.log("else block: ", {depth, sum});
    }
  }

  return sum;
}


console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));