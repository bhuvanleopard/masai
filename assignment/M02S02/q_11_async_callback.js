function timer(duration, callback){
  this.duration = duration
  return setTimeout(()=>callback(), duration)
  
}

function response(){
  console.log(`Timer of ${duration} ms finished`)
}

timer(3000,response)
