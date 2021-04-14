// T: O(n) | S: O(1)
// where n = string length
// If whitespace also counts as a character:
function isPalindrome(string) {
  let mid = Math.floor(string.length / 2);

  for (let i = 0, j = string.length - 1; i < mid; i++, j--) {
    if (string[i] !== string[j]) return false;
  }

  return true;
}

// T: O(n) | S: O(n)
// where n = string length
// If whitespace can be ignored:
function isPalindrome2(string) {
  let charArr = [];

  for (let char of string) {
    if (char !== " ") charArr.push(char);
  }

  let mid = Math.floor(charArr.length / 2);

  for (let i = 0, j = charArr.length - 1; i < mid; i++, j--) {
    if (charArr[i] !== charArr[j]) return false;
  }

  return true;
}

// Recursive
// T: O(n) | S: O(n)
// If whitespace can be ignored;

function isPalindromeR(string) {
  let charArr = [];

  for (let char of string) {
    if (char !== " ") charArr.push(char);
  }

  let first = 0;
  let last = charArr.length - 1;

  return isPalindromeRHelper(charArr, first, last);
}

function isPalindromeRHelper(charArr, first, last) {
  if (first >= last) return true;
  if (charArr[first] !== charArr[last]) return false;

  return isPalindromeRHelper(charArr, first + 1, last - 1);
}


/***** TEST *****/
console.log(isPalindrome('hello'));
console.log(isPalindrome('helleh'));
console.log(isPalindrome('hellolleh'));
console.log(isPalindrome('hello  lleh'));
console.log(isPalindrome(' hel loll eh'));
console.log('\n');

console.log(isPalindrome2('hello'));
console.log(isPalindrome2('helleh'));
console.log(isPalindrome2('hellolleh'));
console.log(isPalindrome2('hello  lleh'));
console.log(isPalindrome2(' hel loll eh'));
console.log('\n');

console.log(isPalindromeR('hello'));
console.log(isPalindromeR('helleh'));
console.log(isPalindromeR('hellolleh'));
console.log(isPalindromeR('hello  lleh'));
console.log(isPalindromeR(' hel loll eh'));
console.log('\n');