
function timer(time,onComplete){
  this.time=time
  // onComplete.time=time
  
  return setTimeout(onComplete, time);
}

function any(){
  console.log(`Timer of ${time} ms finished`)
}

timer(1000, any)
