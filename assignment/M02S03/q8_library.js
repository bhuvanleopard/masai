function Book(title, author, isAvailable = true) {
  this.title= title;
  this.author= author;
  this.isAvailabl = isAvailable;
}


function Member(name, borrowedBooks = []) {
  this.name= name;
  this.borrowedBooks= borrowedBooks
}

Member.prototype.borrowBook = function (book) {
    if (this.borrowedBooks.length >= 3)return;
  if (book.isAvailable) {
    book.isAvailable = false
    this.borrowedBooks.push(book.title)
  } else {
    console.log(`${book.title} is already borrowed.`)
  }
}

function PremiumMember(name, borrowedBooks = []) {
  Member.call(this, name, borrowedBooks)
  this.specialCollectionAccess = true;
}

PremiumMember.prototype = Object.create(Member.prototype);
PremiumMember.prototype.constructor = PremiumMember;


PremiumMember.prototype.borrowBook = function (book) {
  if (this.borrowedBooks.length >= 5)return;
  
  if (book.isAvailable) {
    book.isAvailable = false;
    this.borrowedBooks.push(book.title);
  } else {
    console.log(`"${book.title}" is already borrowed.`);
  }
}

const book1 = new Book("book1", "author1");
const book2 = new Book("book2", "author2");
const book3 = new Book("book3", "author3");
const book4 = new Book("book4", "author4");
const book5 = new Book("book5", "author5");


const regularMember = new Member("jack");
const premiumMember = new PremiumMember("wills");

regularMember.borrowBook(book1)
regularMember.borrowBook(book2)
regularMember.borrowBook(book3)
regularMember.borrowBook(book4)

premiumMember.borrowBook(book1)
premiumMember.borrowBook(book4)
premiumMember.borrowBook(book5)

const borrowForAlice = regularMember.borrowBook.bind(regularMember)
borrowForAlice(book2)
