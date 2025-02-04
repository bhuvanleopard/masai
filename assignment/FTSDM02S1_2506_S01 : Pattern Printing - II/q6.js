function pine(num){
  
  let arr=[], base=2*(num) ;
  
  if(num<3 || num>10){ console.log(`invalid input, 3<=input<=10`)}
  
  for(let i=0; i<num; i++){
    let temp=""
    for(let i1=0; i1<base; i1++){
      
      if(i1>=num-i && i1<=num+i){
        temp+="*"
        continue;
      }
      temp+=" "
      
    }
    console.log(temp)
  }
  
  for(let i2=0; i2<3; i2++){
    let temp=""
    for(let i3=0; i3<base; i3++){
      i3==(num) ? temp+="|": temp+= " "
    }
    console.log(temp)
  }
  
  

}

pine(80)


