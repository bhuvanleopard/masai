function Book(title, author, isAvailable = true, isSpecialCollection=false) { // this is to create instance for book
  this.title= title;
  this.author= author;
  this.isAvailabl = isAvailable; // this is to check if books is borrowed or not
  this.isSpecialCollection=isSpecialCollection // if true only premium member can access it
}


function Member(name, borrowedBooks = []) {  // this instance is to keep track of books borrowed by the user
  this.name= name;
  this.borrowedBooks= borrowedBooks
}

Member.prototype.borrowBook = function (book) { // this will first check the no.of books borrowed my Member than update members borrowBooks[]
    if (this.borrowedBooks.length >= 3)return;
  if (book.isAvailable && !isSpecialCollection) {
    book.isAvailable = false // if eligible to borrow book then in book isAvaialable will be set to false and will be pushed to members borrowedBooks array
    this.borrowedBooks.push(book.title) 
  } else {
    console.log(`${book.title} is already borrowed.`)
  }
}

function PremiumMember(name, borrowedBooks = []) { // this is same as Members but with borrow<=5
  Member.call(this, name, borrowedBooks)
  this.specialCollectionAccess = true;
}

PremiumMember.prototype = Object.create(Member.prototype); // here we inherit the prototype of member
PremiumMember.prototype.constructor = PremiumMember;


PremiumMember.prototype.borrowBook = function (book) { // same as member.borrowBook 
  if (this.borrowedBooks.length >= 5)return;
  
  if (book.isAvailable) {
    book.isAvailable = false;
    this.borrowedBooks.push(book.title);
  } else {
    console.log(`"${book.title}" is already borrowed.`);
  }
}

//here we create book instance
const book1 = new Book("book1", "author1",true,true);
const book2 = new Book("book2", "author2",true,true);
const book3 = new Book("book3", "author3");
const book4 = new Book("book4", "author4");
const book5 = new Book("book5", "author5");

//here we create members
const member = new Member("jack");
const premiumMember1 = new PremiumMember("wills");

//here the borrowing happens
member.borrowBook(book1)
member.borrowBook(book2)
member.borrowBook(book3)
member.borrowBook(book4)

premiumMember1.borrowBook(book1)
premiumMember1.borrowBook(book4)
premiumMember1.borrowBook(book5)


//here we try to other "this" inheritance of borrowedBook so if we have .bind(premiumMember1) then it will be in the premiumMember1 borrowed array
const InPremiumMember1 = member.borrowBook.bind(premiumMember1) // heere 
borrowForAlice(book2)
