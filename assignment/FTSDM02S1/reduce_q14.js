
let input= ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]

function reduced(arr){
  return arr.reduce((acc, ele)=> {acc[ele] = (acc[ele] || 0) + 1; return acc}, {})
  
}

console.log(reduced(input))
