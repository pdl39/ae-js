// Pure Recursion
// T: O(2^n) | S: O(n)

function getNthFib(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;
  return getNthFib(n - 1) + getNthFib(n - 2);
}

console.log(getNthFib(7));


// Recursion with DP
// T: O(n) | S: O(n)

function getNthFibDP(n, seenFibs = new Map([[1, 0], [2, 1]])) {
  if (!seenFibs.has(n)) {
    seenFibs.set(n, getNthFibDP(n - 1) + getNthFibDP(n - 2));
  }
  return seenFibs.get(n);
}

console.log(getNthFibDP(7));


// Iteration
// T: O(n) | S: O(1)

function getNthFibIter(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  let prevprevFib = 0;
  let prevFib = 1;
  let fib;

  for (let i = 3; i <= n; i++) {
    fib = prevprevFib + prevFib;
    prevprevFib = prevFib;
    prevFib = fib;
  }

  return fib;
}

console.log(getNthFibIter(7));