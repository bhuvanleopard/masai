function largerNumber(num1, num2){
  let result = isNaN(num1*num2) ? "invalid input": 
              num1>num2 ? `${num1} is larger than ${num2}`:
              num1<num2 ? `${num2} is larger than ${num1}`:
              `Both numbers are equal`; 
              

  return result;
}


/**
LOGIC
line no.2: declared a variable assigned to ternary operator, checks for valid input
line no.3: checks if "num1" is larger
line no.4: checks if "num2" is larger
line no.5: if both number are equal this line will be returned;

**/

console.log(largerNumber(5,10))
console.log(largerNumber(7,7))
console.log(largerNumber(-1,-10))
