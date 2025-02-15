let input1 = { name: "Alice", hobbies: ["reading", "traveling"] }


function deepClone(obj){
  return JSON.stringify(obj)
}

let a = deepClone(input1);
let Clone =JSON.parse(a)
Clone['name']="bhuvan"
console.log(Clone)
console.log(a)
