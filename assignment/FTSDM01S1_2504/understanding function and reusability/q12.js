let greetUser = function(){
  let input=prompt();
  if(input!=false || input!=0){
    return `Hello, ${input}.`
  }else{
    return `Hello, Guest!.`
  }
}
console.log(greetUser())
