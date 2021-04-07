// One Pass
// T: O(n) | S: O(k), where n = # of competitions and k = # of teams
function tournamentWinner2(competitions, results) {
  let teamPointsMap = new Map();
  let currentWinner = "";
  teamPointsMap.set(currentWinner, 0);
	const WIN_POINTS = 3;

  for (let i = 0; i < results.length; i++) {
    const winner = results[i] === 1 ? competitions[i][0] : competitions[i][1];
    let currentHighScore = teamPointsMap.get(currentWinner);
    if (teamPointsMap.has(winner)) {
      teamPointsMap.set(winner, teamPointsMap.get(winner) + WIN_POINTS);
    }
    else {
      teamPointsMap.set(winner, WIN_POINTS);
    }

    if (teamPointsMap.get(winner) > currentHighScore) {
      currentWinner = winner;
      currentHighScore = teamPointsMap.get(winner);
    }
  }

  return currentWinner;
}

// Two Pass
// T: O(n) | S: O(k), where n = # of competitions and k = # of teams
function tournamentWinner(competitions, results) {
  let teamPointsMap = new Map();

  for (let i = 0; i < results.length; i++) {
    const winner = results[i] === 1 ? competitions[i][0] : competitions[i][1];
    if (teamPointsMap.has(winner)) {
      teamPointsMap.set(winner, teamPointsMap.get(winner) + 3);
    }
    else {
      teamPointsMap.set(winner, 3);
    }
  }
  
  let finalWinnerScore = 0;
  let finalWinner;
  for (let [key, value] of teamPointsMap) {
    if (value > finalWinnerScore) {
      finalWinnerScore = value;
      finalWinner = key;
    }
  }

  return finalWinner;
}

console.log(tournamentWinner([["team1", "team2"], ["team2", "team3"], ["team3", "team1"]], [0, 0, 1]));
console.log(tournamentWinner2([["team1", "team2"], ["team2", "team3"], ["team3", "team1"]], [0, 0, 1]));