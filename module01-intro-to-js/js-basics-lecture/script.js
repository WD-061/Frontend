// ==========================================
// SECTION 1: VARIABLES AND DATA TYPES
// ==========================================

// Numbers and basic arithmetic
let result = 10 + 1;  // First declaration of result
console.log(result);
console.log(typeof result);  // Shows the type of the variable

// Reassignment with let (no need to declare 'let' again)
result = 20;  // Just reassign the value
console.log(result);

// Constants - cannot be reassigned
const myConst = "This is a const!";
console.log(myConst);
console.log(typeof myConst);  // Shows that it's a string

// This will cause an error - can't reassign constants
// myConst = "Something else!";

// Legacy variable declaration (not recommended)
// var dontUseVar = ":(";

// Increment/Decrement operators
let num = 1;
num++;    // Increment by 1
num--;    // Decrement by 1
console.log(num);

// Basic arithmetic (reusing result variable)
result = 10 * 2;  // Reassigning result instead of redeclaring
console.log(result);

// ==========================================
// SECTION 2: LOGICAL OPERATORS
// ==========================================

// Strict equality (===) and logical AND (&&)
console.log(10 === 10 && 0 === "0");  // false because 0 !== "0"

// Logical NOT (!) operator
console.log(!true);   // Inverts true to false
console.log(!10);     // Converts 10 to boolean then inverts
console.log(!0);      // Converts 0 to boolean then inverts
console.log(!-3);     // Converts -3 to boolean then inverts

// ==========================================
// SECTION 3: CONTROL FLOW
// ==========================================

// If-Else Statement Example: Grading System
let score = 65;  // Change this value to test different grades

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}

// Switch Statement Example: Days of the Week
let day = 7;  // Change this value to test different days

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("Another day");
}

// Ternary Operator Example
console.info('Ternary Operator');
let age = 16;
let isAdult = age >= 18 ? true : false;
console.log(isAdult);

// ==========================================
// SECTION 4: FUNCTIONS
// ==========================================

// Function Declaration
function helloWorld() {
  console.log("Hello World!");
}
helloWorld();

// Function with Return Value
function writeMessage() {
  return "Hello World!";
}
const myMessage = writeMessage();
console.log("My Message: ", myMessage);

// Function Expression
const goodByeWorld = function () {
  console.log("Goodbye World!");
};
goodByeWorld();

// Arrow Function
const helloWorldArrow = () => {
  console.log("Hello World!");
};
helloWorldArrow();

// Arrow Function with Parameter
const squareNum = (num) => {
  console.log(num * num);
};
// Using a different variable name to avoid conflict
const squareResult = squareNum("Hi");  // Demonstrates type coercion issues ("NaN")

// Arrow Function with Multiple Parameters
const multiply = (numA, numB) => {
  return numA * numB;
};
const multNum = multiply(5, 6);
console.log(multNum);
