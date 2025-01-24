
let count=0;
for(let i=0; i<score.length; i++){
  score[i]>90? score[i]=90:
    score[i]<40? score[i]+=20:
    null
  
  if(score[i]>=50){count++}  
}
console.log(score, count)
