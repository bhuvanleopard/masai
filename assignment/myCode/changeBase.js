function baseChange(num,base,newBase){
  let sum=0, i=0;
  while(num>0){
    
    let remainder=num%10; sum+=remainder*base**i; num-=remainder; num/=10;
    i++
  
  }
  let num2=0, i2=0;
  while(num2<sum){
   num2=newBase**i2
   i2++;
  }
  
  
  console.log(num2)
  
  let newNum=[];
  while(num2>=1){
    let digit= Math.floor(sum/num2);
    newNum.push(digit);
    sum-=num2*digit;
    num2/=newBase;
  }
  
  return newNum; 
}
