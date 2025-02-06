
function numberOfWish(N,S){
  let obj={
    w:0,
    i:0,
    s:0,
    h:0,
    
  }
  for(let i of S){
    if(typeof obj[i]!="number"){
      continue
    }
    obj[i]++;
  }
  
  
  // console.log(obj)
  
  let count=0;
  let yes=true;
  while(yes){
    for(let i1 in obj){
      if(obj[i1]==0){
        yes=false
        break;
      }
      obj[i1]--;
    }
    count++;
  }
  // console.log(obj)
  console.log(count-1)
    
}

numberOfWish(8, "wishwish")
