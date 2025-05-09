
function Book(title, author, year) { // to create instance of book
  this.title = title;
  this.author = author;
  this.year = year;
}


Book.prototype.getSummary = function () {
  return `${this.title} by ${this.author}, published in ${this.year}`;
} // here we add getSummary to the book


const books = [new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925),
  new Book("To Kill a Mockingbird", "Harper Lee", 1960),
  new Book("1984", "George Orwell", 1949),] // this is an array of instances


export default books 
