
import books from "./books.js"; //here we get books from books.js

let bookSummaries = books.map((book) => book.getSummary());
// this will give the array and we apply .getSummary from books.js

console.log(bookSummaries);
