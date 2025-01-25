function generatePassword(length, numbers=false, chars=true){

  
  let txt='abcdefghijklmnopqrstuvwxyz'
  let char='!@#$%^&*()'
  let numee="1234567890"
  let cap="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
  /**
  numStr=""+numStr
  charStr=""+charStr
  lengthChar=""+lengthChar
  capChar=""+capChar
  **/
  let store=""
  
  function log(placeholder){
    let temp= Math.floor((Math.random()*10**length)/2)
    temp=temp%100;
    placeholder[temp]==undefined?
      store+=placeholder[temp%10]: store+=placeholder[temp]
    
    
  }
  
  
  for(let i=0; i<length; i++){
    
    let numStr= numbers? Math.floor(Math.random()*100):0;
    let charStr= chars? Math.floor(Math.random()*100):0;
    let lengthChar= Math.floor(Math.random()*100);
    let capChar= Math.floor(Math.random()*100);

    
    let a=numStr, b=charStr, c=capChar, d=lengthChar;
    if(a>b && a>c && a>d){log(numee)}
    else if(b>c && b>d){log(char)}
    else if(c>d){log(cap)}
    else{log(txt)}

    /**
    let a=numStr[i], b=charStr[i], c=capChar[i], d=lengthChar[i];
    if(a>b && a>c && a>d){log(numee)}
    else if(b>c && b>d){log(char)}
    else if(c>d){log(cap)}
    else{log(txt)}
    **/
  }
  

  
  
  return store
  
}

console.log(generatePassword(10,true,true))
