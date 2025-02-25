function createCar(make, model, year){
  return {
    make:make, model:model, year:year,
    describe(){return `This car is a ${year} ${make} ${model}.`}
  }
}


const car = createCar("toyota", "camry", 2022)
console.log(car.describe())
