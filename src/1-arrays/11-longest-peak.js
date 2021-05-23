// T: O(n) | S: O(1)
// where n = array length

function findLongestPeakBetter(arr) {
  let longestPeakLength = 0;
  let i = 1;

  while (i < arr.length - 1) {
    const isPeak = arr[i - 1] < arr[i] && arr[i] > arr[i + 1];
    if (!isPeak) {
      i++;
      continue;
    }

    // if current element, i, is a peak, keep track of the full length:
    let leftIdx = i - 2; // since i is a peak, we know arr[i - 1] < arr[i].
    while (leftIdx >= 0 && arr[leftIdx] < arr[leftIdx + 1]) {
      leftIdx--;
    }

    let rightIdx = i + 2; // since i is a peak, we know arr[i + 1] < arr[i].
    while (rightIdx < arr.length && arr[rightIdx] < arr[rightIdx - 1]) {
      rightIdx++;
    }

    const currentPeakLength = rightIdx - leftIdx - 1;
    longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
    i = rightIdx;
  }

  return longestPeakLength;
}




// T: O(n) | S: O(1)
// where n = array length

function findLongestPeak(arr) {
  let longestPeak = 0;
  let candidatePeak = 0;
  let increasing = false;
  let decreasing = false;

  for (let i = 0; i < arr.length - 1; i++) {
    if (!increasing && !decreasing) {
      if (arr[i + 1] > arr[i]) {
        increasing = true;
        candidatePeak = 2;
      }
    }
    else if(increasing) {
      if (arr[i + 1] > arr[i]) {
        candidatePeak++;
      }
      else if (arr[i + 1] < arr[i]) {
        increasing = false, decreasing = true;
        candidatePeak++;
      }
      else {
        increasing = false, decreasing = false;
        candidatePeak = 0;
      }
    }
    else if (decreasing) {
      if (arr[i + 1] >= arr[i]) {
        longestPeak = Math.max(longestPeak, candidatePeak);
        if (arr[i + 1] > arr[i]) {
          decreasing = false, increasing = true;
          candidatePeak = 2;
        }
        else {
          decreasing = false, increasing = false;
          candidatePeak = 0;
        }
      }
      else {
        candidatePeak > 0 && candidatePeak++;
      }
    }
  }

  longestPeak = decreasing ? Math.max(longestPeak, candidatePeak) : longestPeak;

  return longestPeak;
}


// TEST //
const test1 = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
const test2 = [1, 3, 2];
const test3 = [5, 4, 3, 2, 1, 2, 10, 12];
console.log(findLongestPeak(test1));
console.log(findLongestPeakBetter(test1));