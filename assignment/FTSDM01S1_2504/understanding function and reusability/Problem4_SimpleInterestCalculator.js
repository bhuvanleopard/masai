function SimpleInterest(p,r,t){
  let interest=(p*r*t)/100
  let result = isNaN(interest) || (interest)<0 ? "invalid input":
  `The simple interest is: ${interest.toFixed(1)} `;
  return result;
}

console.log(SimpleInterest(1000,5,3))
console.log(SimpleInterest(1500,7,5))
console.log(SimpleInterest(0,6,2))

/**
LOGIC
line no2: calculate the interest
line no3: declared a ternary and checked for NaN
line no4: executes on interest!=NaN
line no5: outputs the result

**/
