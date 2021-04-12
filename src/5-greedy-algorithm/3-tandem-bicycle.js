// T: O(nlogn) | S: O(1), given the arrays can be sorted in place.
// n = number of tandem bycicles

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  if (fastest) {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => b - a);
  } 
  else {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => a - b);
  }

  let totalSpeed = 0;
  for (let i = 0; i < redShirtSpeeds.length; i++) {
    const tandemSpeed = Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
    totalSpeed += tandemSpeed;
  }

  return totalSpeed;
}

console.log(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true));
console.log(tandemBicycle([10, 9, 8, 7, 6, 5, 4, 3, 2], [2, 3, 4, 5, 6, 7, 8, 9, 10], true));
console.log(tandemBicycle([10, 9, 8, 7, 6, 5, 4, 3, 2], [2, 3, 4, 5, 6, 7, 8, 9, 10], false));
console.log(tandemBicycle([10, 10, 10, 10, 10, 10, 10], [2, 2, 2, 2, 2, 2, 2], true));
console.log(tandemBicycle([10, 10, 10, 10, 10, 10, 10], [2, 2, 2, 2, 2, 2, 2], false));