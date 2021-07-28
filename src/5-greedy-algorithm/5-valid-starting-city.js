// T: O(n) | S: O(n)
// where n = length of distance array (or fuel array)

function validStartingCity(distance, fuel, mpg) {
  const remainingMiles = [];
  for (let i = 0; i < distance.length; i++) {
    remainingMiles.push((fuel[i] * mpg) - distance[i]);
  }

  console.log({remainingMiles})

  // keep track of continuous positive remaining miles.
  // we are aiming to get the starting index of the longest streak.
  let currentStreak = {
    startIdx: -1,
    length: 0
  }
  let currentCandidate = {...currentStreak};
  const possibleWrap = remainingMiles[0] >= 0 && remainingMiles[remainingMiles.length - 1] >= 0;
  let tempStreakFromIdxZero = null;

  for (let i = 0; i < remainingMiles.length; i++) {
    if (remainingMiles[i] >= 0) {
      if (currentStreak.startIdx < 0) currentStreak.startIdx = i;
      currentStreak.length++;
      // console.log({currentStreak, currentCandidate})
    }
    else {
      if (possibleWrap && currentStreak.startIdx === 0) {
        tempStreakFromIdxZero = {...currentStreak};
      }
      if (currentStreak.length > currentCandidate.length) {
        currentCandidate = {...currentStreak};
      }
      currentStreak.startIdx = -1;
      currentStreak.length = 0;
      // console.log({currentStreak, currentCandidate})
    }
  }

  if (remainingMiles[remainingMiles.length - 1] >= 0 && tempStreakFromIdxZero) {
    // console.log({tempStreakFromIdxZero})
    currentStreak.length += tempStreakFromIdxZero.length;
    if (currentStreak.length > currentCandidate.length) {
      currentCandidate = {...currentStreak};
    }
    console.log({currentStreak, currentCandidate})
  }

  return currentCandidate.startIdx;
}


// TEST //
const ex1 = {
  distances: [5, 25, 15, 10, 15],
  fuel: [1, 2, 1, 0, 3],
  mpg: 10
}
const ex2 = {
  "distances": [30, 25, 5, 100, 40],
  "fuel": [3, 2, 1, 0, 4],
  "mpg": 20
};
const ex3 = {
  "distances": [4, 6],
  "fuel": [1, 9],
  "mpg": 1
};


// console.log(validStartingCity(ex1.distances, ex1.fuel, ex1.mpg))
// console.log(validStartingCity(ex2.distances, ex2.fuel, ex2.mpg))
console.log(validStartingCity(ex3.distances, ex3.fuel, ex3.mpg))
