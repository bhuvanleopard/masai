function printPattern(N){
  let base=N+1;
  for(let i1=0; i1<N; i1++){
    
    //if(N<1 || N>10){console.log( 'invalid input, 1<=N<=10'); break;}
    
    let temp=""
    for(let i=1; i<N; i++){
      if(i>=N-i1 && i<=N+i1){
        temp+="/ "
        continue;
      }
      temp+=" "
    }
    temp+="/\\"
      console.log(temp)
  }
  
  
}





