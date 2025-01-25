function generatePassword(length, numbers=true, chars=false){

  
  let txt='abcdefghijklmnopqrstuvwxyz'
  let char='!@#$%^&*()'
  let nums="1234567890"
  let cap="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  

  let store=""
  
  function log(placeholder){
    let temp= Math.floor((Math.random()*10**length)/2)
    temp=temp%100;
    placeholder[temp]==undefined?
      store+=placeholder[temp%10]: store+=placeholder[temp]
    
    
  }
  
  
  for(let i=0; i<length; i++){
    
    
    
    let a= numbers? Math.floor(Math.random()*100):0;
    let b= chars? Math.floor(Math.random()*100):0;
    let c= Math.floor(Math.random()*100);
    let d= Math.floor(Math.random()*100);
    

    if(a>b && a>c && a>d){log(nums)}
    else if(b>c && b>d){log(char)}
    else if(c>d){log(cap)}
    else{log(txt)}
  }
  
  

  
  
  return store
  
}

console.log(generatePassword(8,true,true))
