// T: O(nlogn) | S: O(1), given the input arrays can be sorted in place.
// n is the total number of students.

function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);
  const isRedInBackRow = redShirtHeights[0] > blueShirtHeights[0];

  for (let i = 0; i < redShirtHeights.length; i++) {
    if (isRedInBackRow) {
      if (redShirtHeights[i] <= blueShirtHeights[i]) return false;
    }
    else {
      if (redShirtHeights[i] >= blueShirtHeights[i]) return false;
    }
  }

  return true;
}

console.log(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 3, 3]));