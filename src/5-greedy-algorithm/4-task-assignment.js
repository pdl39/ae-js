// T: O() | S: O()
// where

function taskAssignment(k, tasks) {
  tasks.sort((a, b) => a - b);
  return tasks;
}


// TEST //
const tasks1 = [2, 1, 5, 4, 1, 3];

console.log(taskAssignment(3, tasks1));
