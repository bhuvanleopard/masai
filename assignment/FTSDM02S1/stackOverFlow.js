function factorial(n){
  if(typeof n !='number' || n<=0){
    return "Invalid Input"
  }
  
  if(n<=1){
    return 1
  }
  
  return n*factorial(n-1)
}

console.log(factorial(1))
