// T: O(nlogn) | S: O(1), if sorted in place
function nonConstructibleChange(coins) {
  if (coins.length < 1) return 1;
  coins.sort((a, b) => a - b);

  let currentMaxChange = 0;
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > currentMaxChange + 1) return currentMaxChange + 1;
    else currentMaxChange += coins[i];
  }

  return currentMaxChange + 1;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
