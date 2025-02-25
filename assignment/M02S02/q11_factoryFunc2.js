function createEmployee(name, role, salary){
  return {
    name:name, role:role, salary:salary,
    introduce(){
      console.log(`Hello, I am ${name}, working as a ${role}`)
    }
  }
}


const employee1 = createEmployee("alice", "developer", 60000)
employee1.introduce();
