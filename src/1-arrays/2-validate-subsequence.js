// T: O(n) | S: O(1)
function isValidSubsequenceImproved(array, sequence) {
  let arrIdx = 0;
  let seqIdx = 0;

  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (sequence[seqIdx] === array[arrIdx]) seqIdx++;
    arrIdx++;
  }

  return seqIdx === sequence.length;
}


// T: O(n) | S: O(n)
function isValidSubsequence(array, sequence) { 
	let numsMap = new Map();
	for (let i = 0; i < array.length; i++) {
		if (numsMap.has(array[i])) {
			numsMap.get(array[i])["idx"].push(i);
		}
		else {
			numsMap.set(array[i], {"idx":[i], "count": 0});
		}
	}

  let lastIdx = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (!numsMap.has(sequence[i])) return false;
    else {
      let numCount = numsMap.get(sequence[i])["count"];
      if (numCount >= numsMap.get(sequence[i])["idx"].length) return false;
      else {
        if (numsMap.get(sequence[i])["idx"][numCount] < lastIdx) {
          return false;
        }
        lastIdx = numsMap.get(sequence[i])["idx"][numCount];
        numsMap.get(sequence[i])["count"]++;
      }
    }
  }

  return true;
}

console.log(isValidSubsequence([5,1,22,25,6,-1,8,6,1,10], [1,22,6,-1,8,1,10]));
console.log(isValidSubsequenceImproved([5,1,22,25,6,-1,8,6,1,10], [1,22,6,-1,8,1,10]));