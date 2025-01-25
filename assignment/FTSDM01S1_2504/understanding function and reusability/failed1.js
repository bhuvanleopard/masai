function generatePassword(length, numbers=false, chars=false){
  let numStr= numbers? Math.floor(Math.random()*10**length):0;
  let charStr= chars? Math.floor(Math.random()*10**length):0;
  let lengthChar= Math.floor(Math.random()*10**length);
  
  let txt='abcdedIEieie'
  let char='*#@#@##$#@@'
  let numee="23388382020"
  
  numStr=""+numStr
  charStr=""+charStr
  lengthChar=""+lengthChar
  console.log(numStr, charStr, lengthChar)
  let store=""
  
  function log(placeholder){
    let temp= Math.floor((Math.random()*10**length)/2)
    temp=temp%100;
    placeholder[temp]==undefined?
      store+=placeholder[temp%10]: store+=placeholder[temp]
    //console.log(temp)
    
  }
  
  for(let i=0; i<length; i++){
    let high = numStr[i]>charStr? numStr[i]>lengthChar[i]? log(txt): log(char):
      charStr[i]>lengthChar[i]? log(txt): log(char)
   // console.log(high)          
    
  }

  /**
  for(let i=0; i<length; i++){
    let high = numStr[i]>charStr? numStr[i]>lengthChar[i]? numStr[i]: lengthChar[i]:
      charStr[i]>lengthChar[i]? charStr[i]: lengthChar[i]
    console.log(high)          
    
  }
  **/
  console.log(store)
  
}

generatePassword(8)
