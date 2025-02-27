

function Person(name,age){ //this to create an instance of person
  this.name=name;
  this.age=age;
}

Person.prototype.introduce = function() {console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)}
//here were add introduce to the prototype of Person


function employee(name,age,job){
  this.job=job
  Person.call(this, name,age) // this is return the Person function but the heritance will be from this instance function itself
}
employee.prototype=Object.create(Person.prototype) // here we ensure the prototype is inherited from the Person , I found this step to be tough to understand
employee.prototype.constructor = employee

employee.prototype.work= function(){console.log(`${this.name} is working as a ${this.job}`)}
// adding work to the prototype of employee


let person1= new Person("jack", 23)
person1.introduce()
let employee1 = new employee("wills", 25, "developer")
employee1.introduce()
employee1.work()
