let tasks=["task_1", "task_2", "task_3", "task_4", "task_5"];

//1
//let temp1=tasks

for (let i=0; i<tasks.length; i++){
  if (i==0){continue;}
  tasks[i-1]=tasks[i];
}
tasks.pop()
//console.log(tasks)

//2
//let temp2=tasks
for(let i=0; i<2; i++){
  tasks.length+=1;
  for(let a=tasks.length-1; a>0; a--){
    tasks[a]=tasks[a-1]    
  }
}
tasks[0]="task6"; tasks[1]="task7";
//console.log(tasks)

//3
//let temp3=tasks
tasks.pop()
tasks.push("task8")

//4
console.log(tasks)
