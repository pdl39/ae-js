// T: O(n*d) | S: O(n)
// where n = target amount, d = number of coin denoms (denoms arrary length)

function minNumberOfCoinsForChange(n, denoms) {
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i < dp.length; i++) {
    for (const denom of denoms) {
      if (denom <= i) {
        dp[i] = Math.min(dp[i], 1 + dp[i - denom]);
      }
    }
  }

  return dp[n] === Infinity ? -1 : dp[n];
}


// TEST //
const denoms1 = [1, 5, 10];
const denoms2 = [1, 3, 4, 5];
const denoms3 = [3, 5, 7, 8, 9];

console.log(minNumberOfCoinsForChange(7, denoms1));
console.log(minNumberOfCoinsForChange(7, denoms2));
console.log(minNumberOfCoinsForChange(8, denoms3));
console.log(minNumberOfCoinsForChange(1, denoms3));
console.log(minNumberOfCoinsForChange(4, denoms3));
