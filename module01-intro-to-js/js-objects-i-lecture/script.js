// ==========================================
// SECTION 1: OBJECT LITERALS
// ==========================================
/* 
  Objects in JavaScript allow us to store multiple related values together.
  They consist of key-value pairs where:
  - Keys are like labels (always strings - but no quotation marks needed)
  - Values can be any data type (strings, numbers, arrays, functions, etc.)
*/

// Creating an object literal with various property types
const user = {
  firstName: "John",         // String property
  lastName: "Doe",           // String property
  age: 12,                   // Number property
  hobbies: ["football", "gaming", "sleeping"],  // Array property
  sayHi() {                  // Method (function inside an object)
    return `Hello, my name is ${user.firstName}, I'm ${user.age} years old!`;
  },
};

// ==========================================
// SECTION 2: ACCESSING OBJECT PROPERTIES
// ==========================================
/*
  There are two ways to access object properties:
  1. Dot notation: object.property
  2. Bracket notation: object["property"]
  
  Bracket notation is useful when:
  - Property names have spaces or special characters
  - Property names are stored in variables
*/

// Uncomment to see different ways to access properties
console.log(user);                  // Shows the entire object
console.log(user.firstName);        // Dot notation
console.log(user["age"]);           // Bracket notation
console.log(user.hobbies[0]);       // Accessing array elements inside object

// Using variables with bracket notation
const selectedValue = "firstName";
console.log(selectedValue);         // Shows "firstName"
console.log(user[selectedValue]);   // Shows "John" (same as user.firstName)

// ==========================================
// SECTION 3: MODIFYING OBJECTS
// ==========================================
/*
  Objects are mutable - we can:
  - Change existing property values
  - Add new properties
  - Delete properties
*/

// Uncomment to see how to modify objects
user.age = 13;                      // Modifying existing property
user.job = "Web Developer";         // Adding new property
console.log(user);

// Calling an object method
console.log(user.sayHi());          // Shows "Hello, my name is John, I'm 12 years old!"

// ==========================================
// SECTION 4: OBJECT DESTRUCTURING
// ==========================================
/*
  Destructuring allows us to extract multiple properties from an object
  into individual variables in a single statement.
*/

// Basic destructuring
const { firstName, age } = user;
console.log(firstName, age);        // Shows "John 12"

// Destructuring in function parameters
function greet({ firstName, age }) {
  console.log(`Hello, my name is ${firstName} and I am ${age} years old.`);
}

// Using the function with our user object
greet(user);                         // Shows "Hello, my name is John and I am 12 years old."
