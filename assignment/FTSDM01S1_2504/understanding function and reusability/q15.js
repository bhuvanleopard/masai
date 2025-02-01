
function genPassword(length=3, incNum=true, incChar=false){
  let num='0123456789', lowCase="abcdefghijklmnopqrstuvwxyz", upCase="ABCDEFGHIJKMLNOPQRSTUVWXYZ", char="!@#$%^&*()";
  let str=[], quotient=Math.floor(length/3), remainder=length%3
  
  function generator(type, count){
    // let str=""
    for(let i=0; i<count; i++){
      let temp=Math.floor(Math.random()*100)
      type[temp] == undefined ?
        str.push(type[temp%10])
        : str.push(type[temp])
    }
    //return str;
  }
  
  generator(num, quotient)
  generator(char, quotient)
  generator(upCase, quotient)
  generator(lowCase, remainder)
  
  let popCount=0;
  
  //console.log(str)
  
  if(!incNum){
    let replace=generator(lowCase, quotient);
    for(let i2=0; i2<quotient; i2++){
      str[i2]=str[length-1+i2]
      popCount++;
    }
  }
  
  if(!incChar){
    let replace=generator(lowCase, quotient);
    for(let i2=quotient; i2<quotient*2; i2++){
      str[i2]=str[length-1+i2];
      popCount++;
    }
  }
  
  // console.log(str)
  for(let i3=0; i3<popCount; i3++){
    str.pop()
  }
  
  
  for(let i=0; i<length; i++){
    let ran=Math.floor(Math.random()*10);
    if(ran < length){
      temp=str[i];
      str[i]=str[ran];
      str[ran]=temp
    }
  }
  
  let password="";
  for(let i4=0; i4<length; i4++){
    password+=str[i4]
  }
  
  return password
}

console.log(genPassword())
