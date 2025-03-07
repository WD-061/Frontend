// The Library

// Objective
// Learn and apply the four pillars of OOP: Encapsulation, Abstraction, Inheritance, and Polymorphism.

// Instructions
// 1. Create a base class LibraryItem  with private fields for title and author, and a method getInfo() to return a string with the item's title and author
//      - Since we are using private class fields, we need to create special functions called getters to get the info securely from other classes that inherit from it.

// 2. Create a subclass Book that inherits from LibraryItem and adds a private field pages and a public method getInfo() that extends getInfo() to include the number of pages.

// 3. Create another subclass Member with private fields name and booksCheckedOut (an array to store Book objects). Add public methods checkOutBook(book), returnBook(book), and listBooks() to manage the books a member has checked out.

// 4. In this example, the getInfo() method in LibraryItem and Book classes is a form of polymorphism. Remember, objects responding differently to the same methods.

// Define the base class LibraryItem
class LibraryItem {
  #title;
  #author;

  constructor(title, author) {
    this.#title = title;
    this.#author = author;
  }

  get getTitle() {
    return this.#title;
  }

  get getAuthor() {
    return this.#author;
  }

  getInfo() {
    return `Title: ${this.#title}, Author: ${this.#author}`;
  }
}

// Define the Book subclass inheriting from LibraryItem
class Book extends LibraryItem {
  #pages;

  constructor(title, author, pages) {
    super(title, author);
    this.#pages = pages;
  }

  getInfo() {
    return `Title: ${this.getTitle}, Author: ${this.getAuthor}, Pages: ${
      this.#pages
    }`;
  }
}

// Define the Member class
class Member {
  #name;
  #booksCheckedOut;

  constructor(name) {
    this.#name = name;
    this.#booksCheckedOut = [];
  }

  checkOutBook(book) {
    this.#booksCheckedOut.push(book);
  }

  returnBook(book) {
    this.#booksCheckedOut = this.#booksCheckedOut.filter((b) => b !== book);
  }

  listBooks() {
    return this.#booksCheckedOut.map((book) => book.getInfo()).join("\n");
  }

  getMemberInfo() {
    return `Member: ${this.#name}, Books Checked Out: ${
      this.#booksCheckedOut.length
    }`;
  }
}

// Create instances of Book
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 281);
const book2 = new Book("1984", "George Orwell", 328);

// Create an instance of Member
const member = new Member("John Doe");

// Member checks out books
member.checkOutBook(book1);
member.checkOutBook(book2);

// List books checked out by the member
console.log(member.listBooks());
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee, Pages: 281
// Title: 1984, Author: George Orwell, Pages: 328

// Get member info
console.log(member.getMemberInfo());
// Output: Member: John Doe, Books Checked Out: 2
