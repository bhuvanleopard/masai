
function book(title, author) {
    return {
        title: title,
        author: author,

        details() {
            console.log(`Title: ${this.title}, Author: ${this.author}`);
        }
    };
}


function createLibrary() {
  
    let books = [];

    return {
        
      addBook(input){books.push(input)},
      
      removeBook(input){
        let res =[]
        for(each of books){ 
          if(each.title!=input) res.push(each) 
        }
        books=res
      },
        
      listBooks(){
        for(each of books){
          console.log(`title: ${each.title}, Author: ${each.author}`)
        }
      }
    }
}



let book1 = book("to kill a mockingbird", "harper")
let book2 = book("play with javascript", "Nerd")
let lib = createLibrary();
lib.addBook(book1)
lib.addBook(book2)
lib.removeBook('to kill a mockingbird')
lib.listBooks()
