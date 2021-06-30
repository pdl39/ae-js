// Using matrix (2-D array) to solve
// T: O(n*m) | S: O(n*m) --> Space can be optimized to S: O(min(n, m))
// where n = length of string 1, m = length of string 2 (or vice versa)

function levenshteinDistance1(str1, str2) {
  const smallerStr = str2.length < str1.length ? str2 : str1;
  const biggerStr = str2.length < str1.length ? str1 : str2;

  const strTable = new Array(biggerStr.length + 1);
  for (let i = 0; i < strTable.length; i++) {
    strTable[i] = new Array(smallerStr.length + 1);
  }

  strTable[0][0] = 0;
  for (let col = 1; col < smallerStr.length + 1; col++) {
    strTable[0][col] = col;
  }

  for (let row = 1; row < biggerStr.length + 1; row++) {
    strTable[row][0] = row;
  }

  for (let col = 1; col < smallerStr.length + 1; col++) {
    for (let row = 1; row < biggerStr.length + 1; row++) {
      if (biggerStr[row - 1] === smallerStr[col - 1]) {
        strTable[row][col] = strTable[row - 1][col - 1];
      }
      else {
        strTable[row][col] = 1 + Math.min(strTable[row - 1][col - 1], strTable[row][col - 1], strTable[row - 1][col]);
      }
    }
  }

  return strTable[biggerStr.length][smallerStr.length];
}


// TEST //
const str1 = 'abcde';
const str2 = 'cfe';

console.log(levenshteinDistance1(str1, str2));
