function outerFunction(message){
  return function(){
    console.log(message)
  }
}

let invoke1=outerFunction("hello World")
invoke1()
