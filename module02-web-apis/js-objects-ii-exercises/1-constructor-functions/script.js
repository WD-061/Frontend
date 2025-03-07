// Constructor Functions

// Objective
// Learn how to initialize objects using constructor functions in JavaScript and understand how to define properties and methods within a constructor function.

// Instructions
// 1. Create a constructor function called Book.
// 2. The Book constructor function should initialize the following properties:
//      - title: a string representing the title of the book.
//      - author: a string representing the author of the book.
//      - pages: a number representing the total pages in the book.
//      - isRead: a boolean indicating if the book has been read or not.
// 3. Add a method named summary to the prototype of the Book constructor. This method should return a string summarizing the book details in the format:
//      - "Title: [title], Author: [author], Pages: [pages], Read: [Yes/No]".

// Tip: To add a method to a prototype using a constructor function, you need to do:
// YourObject.prototype.methodName = function(){}

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.summary = function () {
  return `Title: ${this.title}, Author: ${this.author}, Pages: ${
    this.pages
  }, Read: ${this.isRead ? "Yes" : "No"}`;
};

const myBook = new Book("To Kill a Mockingbird", "Harper Lee", 281, true);

console.log(myBook.summary());
// Output: Title: To Kill a Mockingbird, Author: Harper Lee, Pages: 281, Read: Yes
