function largerNumber(num1, num2){
  let result =num1>num2 ? `${num1} is larger than ${num2}`:
              num1<num2 ? `${num2} is larger than ${num1}`:
              num1==num2 ?`Both numbers are equal`: 
              "invalid input";

  return result;
}

console.log(largerNumber(5,10))
console.log(largerNumber(7,7))
console.log(largerNumber(-1,-10))
