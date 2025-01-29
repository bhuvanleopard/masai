function array2D(N){
  let array=[]
  let count=1;
  for(let b=0; b<N; b++){
    let subArray=[]
    for(let a=0; a<N; a++){
      subArray.push(count)
      count++
    }
    array.push(subArray)
  }
  return array;
}

console.log(array2D(3))
