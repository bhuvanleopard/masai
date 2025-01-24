function generatePassword(length=4, includeNumbers=true, includeSpecialChars=false){
  let char="abcdefghijklmnopqrstuvwxyz"
  let sym="#$%@#@%$@#"
  if(includeSpecialChars){
    char+=sym;
  }
  
  let count=0;
  let array="";
  while(count<length){
    let temp= Math.random()*10;
    let temp2= Math.random()*10;
    let res=Math.floor(temp*temp2);

    char[res]==undefined ? includeNumbers ? array+=res%10: 
                            array+= char[(res%10)]:
    array+= char[res];
    
    
    count++;
    
  }
  
  if(includeNumbers){
    let temp4=Math.random()*10;
    temp4=Math.floor(temp4);
    array[length-1]=temp4
  }
  
  if(includeSpecialChars){
    let temp3=Math.random()*10;
    temp3=Math.floor(temp3);
    array[length-2]=sym[temp3]
  }
  
  
  return array

  
}



console.log(generatePassword(8,true,true))
