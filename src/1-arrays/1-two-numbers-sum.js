// T: O(n) | S: O(n)
function twoNumberSum(array, targetSum) {
  let complementsMap = new Map();
	for (let i = 0; i < array.length; i++) {
		let complement = targetSum - array[i];
		if (complementsMap.has(array[i])) {
			return [array[i], complement];
		}
		else {
			complementsMap.set(complement, true);
		}
	}
	return [];
}


// T: O(nlogn) | S: O(1)
function twoNumberSum2(array, targetSum) {
	const arraySorted = array.sort((a,b) => a-b);
	
  let i = 0;
	let j = arraySorted.length - 1;
	while (i < j) {
		let sum = arraySorted[i] + arraySorted[j];
		if (sum === targetSum) return [arraySorted[i], arraySorted[j]];
		if (sum < targetSum) i++;
		if (sum > targetSum) j--;
	}
	
	return [];
}

console.log(twoNumberSum([3,5,-4,8,11,1,-1,6], 10));
console.log(twoNumberSum2([3,5,-4,8,11,1,-1,6], 10));