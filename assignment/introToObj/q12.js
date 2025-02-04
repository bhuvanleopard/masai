let book = {title: "the hobbit", author: "J.R.R Tolkien", year: 1937}
let res=""
for(key in book){
  res+=`${key}: ${book[key]} `
}

console.log(res)
