function BMI(weight,height){
  if (height<=0 || weight<=0){ return "invalid input, height and weight cannot be zero"}
  let bmi=weight/(height**2)
  let result = isNaN(bmi) ? "invalid input, height and weight must be a positive number ":
  `Your BMI is: ${bmi.toFixed(2)} `;
  return result;
}

console.log(BMI(70,1.75))
console.log(BMI(55,1.60))
console.log(BMI(90,1.80))

/**
LOGIC
line no.2: checks if inputs are negative or 0, here input validation for type check has be skipped
            cause input type gets validated in line no.4
line no3: calculates the bmi, irrespective of a valid input type.
line no4: this ternary validates the input type and eliminates invalid data-types
line no5: returns the valid output upto 2 decimal places
**/
