// Using matrix (2-D array) to solve
// Optimized for Space
// T: O(n*m) | S: O(min(n, m))
// where n = length of string 1, m = length of string 2 (or vice versa)

function levenshteinDistance(str1, str2) {
  const smallerStr = str2.length < str1.length ? str2 : str1;
  const biggerStr = str2.length >= str1.length ? str2 : str1;

  let currentRow = new Array(smallerStr.length + 1);
  let prevRow = null;

  for (let col = 0; col < currentRow.length; col++) {
    currentRow[col] = col;
  }

  for (let row = 1; row < biggerStr.length + 1; row++) {
    prevRow = currentRow;
    currentRow = new Array(smallerStr.length + 1);
    currentRow[0] = row;

    for (let col = 1; col < currentRow.length; col++) {
      if (biggerStr[row - 1] === smallerStr[col - 1]) {
        currentRow[col] = prevRow[col - 1];
      }
      else {
        currentRow[col] = 1 + Math.min(prevRow[col - 1], currentRow[col - 1], prevRow[col]);
      }
    }
  }

  return currentRow[currentRow.length - 1];
}



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
console.log(levenshteinDistance(str1, str2));
