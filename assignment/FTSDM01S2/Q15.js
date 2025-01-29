function seriesSum(N,X){
  let sum=0;
  for(let a=0; a<N; a++){
    let k =(X<=0 || N<=0) ? '-1':
    X**a
    sum+=k
  }
  return sum;
}

console.log(seriesSum(3,2))
