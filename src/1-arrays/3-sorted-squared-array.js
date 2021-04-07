// SOLUTION 3
// T: O(n) | S: O(n)
function sortedSquaredArray3(array) {
  const squareArr = new Array(array.length);
	let i = 0; // pointer for smaller num
	let j = array.length - 1; // pointer for bigger num
	
	for (let idx = array.length - 1; idx >= 0; idx--) {
		const smallerNum = array[i];
		const biggerNum = array[j];
		
		if (Math.abs(smallerNum) > Math.abs(biggerNum)) {
			squareArr[idx] = smallerNum**2;
			i++;
		}
		else {
			squareArr[idx] = biggerNum**2;
			j--;
		}
	}
	
	return squareArr;
}


// SOLUTION 2
// T: O(n) | S: O(n)
function sortedSquaredArray2(array) {
  let squareArr = new Array(array.length);
  let idx = squareArr.length - 1;

  let i = 0; // pointer for smallest num
  let j = array.length - 1; // pointer for biggest num

  while (i < j) {
    if (Math.abs(array[i]) > Math.abs(array[j])) {
      squareArr[idx] = array[i]**2;
      i++;
    }
    else {
      squareArr[idx] = array[j]**2;
      j--;
    }
    idx--;
  }

  if (i === j) squareArr[idx] = array[i]**2;

  return squareArr;
}

// SOLUTION 1
// T: O(n) | S: O(n)
function sortedSquaredArray(array) {
  let negArr = [];
  let posArr = [];
  let squareArr = [];
  for (let num of array) {
    if (num < 0) negArr.push(num);
    else posArr.push(num);
  }

  let i = negArr.length - 1, j = 0;
  while (i >= 0 && j < posArr.length) {
    let negSquare = negArr[i]**2;
    let posSquare = posArr[j]**2;
    if (negSquare < posSquare) {
      squareArr.push(negSquare);
      i--;
    }
    else {
      squareArr.push(posSquare);
      j++;
    }
  }

  while (i >= 0) {
    squareArr.push(negArr[i]**2);
    i--;
  }
  while (j < posArr.length) {
    squareArr.push(posArr[j]**2);
    j++;
  }

  return squareArr;
}

console.log(sortedSquaredArray([1,2,3,4,5,6,7,8]));
console.log(sortedSquaredArray([-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8]));
console.log(sortedSquaredArray([-6]));
console.log(sortedSquaredArray([1]));
console.log(sortedSquaredArray2([]));

console.log(sortedSquaredArray2([1,2,3,4,5,6,7,8]));
console.log(sortedSquaredArray2([-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8]));
console.log(sortedSquaredArray2([-6]));
console.log(sortedSquaredArray2([1]));
console.log(sortedSquaredArray2([]));

console.log(sortedSquaredArray3([1,2,3,4,5,6,7,8]));
console.log(sortedSquaredArray3([-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8]));
console.log(sortedSquaredArray3([-6]));
console.log(sortedSquaredArray3([1]));
console.log(sortedSquaredArray3([]));