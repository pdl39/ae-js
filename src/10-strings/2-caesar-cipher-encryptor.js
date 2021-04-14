// T: O(n) | S: O(n)
// where n = string length

function caesarCipherEncryptor(string, key) {
  let charArr = [];
  let newKey = key % 26;

  for (let char of string) {
    charArr.push(shiftChar(char, newKey));
  }

  return charArr.join('');
}

function shiftChar(char, key) {
  let aCode = 'a'.charCodeAt();
  let zCode = 'z'.charCodeAt();

  let charCode = char.charCodeAt();

  if (charCode < aCode || charCode > zCode) return char;
  
  if (charCode + key <= zCode) {
    charCode += key;
  }
  else {
    charCode = charCode + key - 26;
  }

  return String.fromCharCode(charCode);
}


/***** TEST *****/
console.log(caesarCipherEncryptor('abcdefg', 5));
console.log(caesarCipherEncryptor('abcdefg', 0));
console.log(caesarCipherEncryptor('abcdefg', 26));
console.log(caesarCipherEncryptor('abcdefg', 25));
console.log(caesarCipherEncryptor('abcdefg', 1));
console.log(caesarCipherEncryptor('zbcgdefxyjuvg', 5));
console.log(caesarCipherEncryptor('zbcgdefxyjuvg', 26));
console.log(caesarCipherEncryptor('zbcgdefxyjuvg', 52));