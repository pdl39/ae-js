// T: O(n) | S: O(1)
// where n = string length
// Space is constant because maximum # of unique chars is 26 (lowercase alphabet)

function firstNonRepeatingCharacter(string) {
  const chars = new Map();

  for (const char of string) {
    if (!chars.has(char)) chars.set(char, 1)
    else chars.set(char, chars.get(char) + 1);
  }

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (chars.get(char) === 1) return i;
  }

  return -1;
}

function firstNonRepeatingCharacter2(string) {
  const chars = new Map();

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (!chars.has(char)) {
      chars.set(char, {"count": 1, "idx": i});
    }
    else {
      chars.get(char)["count"]++;
    }
  }

  for (let [key, value] of chars) {
    if (value["count"] === 1) {
      return value["idx"];
    }
  }

  return -1;
}


/***** TEST *****/
console.log(firstNonRepeatingCharacter('aattbbccddeeeggff'));
console.log(firstNonRepeatingCharacter('aattbbccdeeeggff'));
console.log(firstNonRepeatingCharacter('aatbbccdeeeggff'));
console.log(firstNonRepeatingCharacter('atat'));
console.log(firstNonRepeatingCharacter('ata'));
console.log(firstNonRepeatingCharacter('a'));
console.log(firstNonRepeatingCharacter(''));

console.log('\n');

console.log(firstNonRepeatingCharacter2('aattbbccddeeeggff'));
console.log(firstNonRepeatingCharacter2('aattbbccdeeeggff'));
console.log(firstNonRepeatingCharacter2('aatbbccdeeeggff'));
console.log(firstNonRepeatingCharacter2('atat'));
console.log(firstNonRepeatingCharacter2('ata'));
console.log(firstNonRepeatingCharacter2('a'));
console.log(firstNonRepeatingCharacter2(''));