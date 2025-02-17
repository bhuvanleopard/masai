
function timer(time,onComplete){
  
  // onComplete.time=time
  
  return setTimeout(()=>onComplete(time), time);
}

function any(ele){
  console.log(`Timer of ${ele} ms finished`)
}

timer(1500, any)



//somehow even following code works!!!

// function timer(time,onComplete){
//   this.time=time
//   // onComplete.time=time
  
//   return setTimeout(onComplete, time);
// }

// function any(){
//   console.log(`Timer of ${time} ms finished`)
// }

// timer(1000, any)
