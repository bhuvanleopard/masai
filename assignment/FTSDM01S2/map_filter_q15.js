
function processStudent(arr){
  let filtered = arr.filter((ele)=> ele.marks > 60);
  let sortArr= filtered.sort((a,b)=>  b.marks-a.marks )
  //a-b for ascending , b-a for descending  
  let mapped = sortArr.map((ele)=>ele.name)
  return mapped
}


let a=processStudent(input)
console.log(a)
