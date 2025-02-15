function multiplyNumbers(ele1,ele2){
  let res=this.init*ele1*ele2
  return res
}
let obj={init: 1}

console.log(multiplyNumbers.apply(obj,[2,5]))

