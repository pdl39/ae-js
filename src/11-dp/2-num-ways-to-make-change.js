// T: O(nd) | S: O(n)
// where n = target amount, d = number of denominations

function numberOfWaysToMakeChange(n, denoms) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (const denom of denoms) {
    for (let amount = 1; amount < n + 1; amount++) {
      if (amount >= denom) dp[amount] += dp[amount - denom];
      console.log({denom, amount, dp});
    }
  }

  return dp[n];
}

// TEST //
const denoms1 = [1, 5, 10, 25];
const denoms2 = [1, 2, 3];

// console.log(numberOfWaysToMakeChange(10, denoms1));
// console.log(numberOfWaysToMakeChange(5, denoms2));
console.log(numberOfWaysToMakeChange(9, [3, 1]));
