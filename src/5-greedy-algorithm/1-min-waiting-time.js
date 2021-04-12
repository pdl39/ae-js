
function minWaitingTime(queries) {
  queries.sort((a, b) => a - b);
  let currentWT = 0;
  let cumulWT = 0;
  for (let i = 0; i < queries.length - 1; i++) {
    currentWT += queries[i];
    cumulWT += currentWT;
    console.log("item: ", queries[i], {i, currentWT, cumulWT});
  }
  return cumulWT;
}

// console.log(minWaitingTime([5, 1, 4]));
// console.log(minWaitingTime([3, 2, 1, 2, 6]));
console.log(minWaitingTime([10, 6, 4, 7, 2, 47, 5, 6, 3, 4, 2, 0, 1]));