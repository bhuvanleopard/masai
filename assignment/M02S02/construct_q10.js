
let constructor={
  name: "bhuvan", 
  age: "23",
  
  displayInfo(){
    return [this.name,this.age]
  }
}

let user=constructor.displayInfo.bind(constructor)

console.log(user())
