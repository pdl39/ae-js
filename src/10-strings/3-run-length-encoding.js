// T: O(n) : S: O(n)
// where n = string length

function runLengthEncoding(string) {
  let encodedArr = [];
  let count = 1;

  for (let i = 1; i < string.length + 1; i++) {
    let currentChar = i === string.length ? null : string[i];
    let prevChar = string[i - 1];

    if (count === 9 || currentChar !== prevChar) {
      encodedArr.push(count, prevChar);
      count = 0;
    }
    count++;
  }

  return encodedArr.join('');
}



console.log(runLengthEncoding('AAAABBBBCCCDDEFGIJJKLLLMENNNNEEI'));
console.log(runLengthEncoding('AAAABBBBBBBBBBBBBBBBBBBB'));
console.log(runLengthEncoding('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'));
console.log(runLengthEncoding('ABC'));