function sortNames(arr){
  let res=arr.sort((a,b)=> a.localeCompare(b))
  return res
}



let res = sortNames(["banana","Apple", "Banana", "apple"])

console.log(res)

//.localCompare sort the str according to cap-case
