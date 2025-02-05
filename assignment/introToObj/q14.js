function nobitaFrequency(n,str){
  //write code here
  let obj={}
  let letters="abcdefghijklmnopqrstuvwxyz"
  
  for(i2 of letters){
    obj[i2]=n;
  }
  for(i of str){
    obj[i]-=1;
  }
  console.log(obj)
  let pre=0, low;
  for(i1 in obj){
    if(obj[i1]<n){
      if(obj[i1]>pre){
        low=i1;
        pre=obj[i1];
      }
    }
  }
  console.log(low)

}
