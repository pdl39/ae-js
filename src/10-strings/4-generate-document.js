// T: O(n + m) | S: O(c)
// where n = characters string length, m = document string length, c = # of unique char in characters string

function generateDocument(characters, document) {
  const charMap = new Map();

  for (let char of characters) {
    if (!charMap.has(char)) {
      charMap.set(char, 1);
    }
    else {
      charMap.set(char, charMap.get(char) + 1);
    }
  }

  for (let char of document) {
    if (!charMap.has(char) || charMap.get(char) === 0) return false;
    charMap.set(char, charMap.get(char) - 1);
  }

  return true;
}


/***** TEST *****/
console.log(generateDocument('eoll h yn l m ais ! emetreP', 'helllo my name is Peter'));
console.log(generateDocument('eoll h yn l m ais ! emetreP', ''));
console.log(generateDocument('olleh', 'hello'));
console.log(generateDocument('olleh', 'ello'));
console.log(generateDocument('olle', 'hello'));