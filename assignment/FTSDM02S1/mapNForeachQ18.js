let arr=[{name: "Laptop", price: 1000}, {name: "Mouse", price:20}]

function processProducts(arr){
  return function budget(num){
    let temp = arr.map((ele)=> ele.name)
    temp.forEach((ele, ind) => {let res=arr[ind].price > num ? `${ele} is above ${num}`: `${ele} is below ${num}`;
    console.log(res)})
  }
}

// console.log(processProducts(arr))

let func1= processProducts(arr);
func1(50)
