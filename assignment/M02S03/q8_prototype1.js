
function animal(type){
  this.type="Animal"
}
animal.__proto__.sound=function(){console.log("Animal Sound")}

function Dog(){
 Object.setPrototypeOf(this, animal)
}

Dog.__proto__.sound= function(){console.log("Bark")}

Dog.sound()


let myDog = new Dog()

myDog.sound()
