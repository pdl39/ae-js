// T: O(nlogn) | S: O(n)
// where n = tasks array length

function taskAssignment(k, tasks) {
  if (k === 1) return [[0, 1]];

  const resultingPairs = [];
  const tasksObjArr = tasks.map((task, idx) => {return {duration: task, index: idx}});
  tasksObjArr.sort((a, b) => a.duration - b.duration);

  for (let i = 0, j = tasksObjArr.length - 1; i < j; i++, j--) {
    resultingPairs.push([tasksObjArr[i].index, tasksObjArr[j].index]);
  }

  return resultingPairs;
}


// TEST //
const tasks1 = [2, 1, 5, 4, 1, 3];
const tasks2 = [1, 3, 5, 3, 1, 4];

console.log(taskAssignment(3, tasks1));
console.log(taskAssignment(3, tasks2));
