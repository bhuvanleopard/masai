function personInfo(name,age){
  
  name = this.name; age=this.age
  // name=users.name; age=users.age  
  return [name,age]
}

// let users={
  let user1={name:"Alice", age: 21}
// }

console.log(personInfo.call(user1))

