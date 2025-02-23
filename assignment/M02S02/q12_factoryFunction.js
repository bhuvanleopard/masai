function createCar(make, model, year){
  return {
    make: make, model:model, year:year,
    describeCar(){return `This car is a ${this.year} ${this.make} ${this.model}`}
  }
}

let newFac = createCar("toyota", "camry", 2022)
// console.log(newFac.make, newFac.describeCar())
