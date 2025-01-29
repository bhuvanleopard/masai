function seriesSum(array, length){
  let sum=0;
  for(let a=0; a<length; a++){
    let N=array[a]
    
    if(N<0){
      sum+=N;
      continue
    }
    
    while(N>0){
      sum+=(N%10);
      N-=(N%10);
      N/=10;
    }
  }
  return sum;
}

console.log(seriesSum([-1,-58,2,12], 4))
