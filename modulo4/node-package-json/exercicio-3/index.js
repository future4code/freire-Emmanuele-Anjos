const task = ["lavar a louça", "passear com o dog"];
const newTask = process.argv[2];

task.push(newTask);

console.table(task);
