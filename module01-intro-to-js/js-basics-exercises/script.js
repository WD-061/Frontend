// ==========================================
// SECTION 1: VARIABLES
// ==========================================
/* 
  In JavaScript, we use variables to store data that we can use later.
  There are three ways to declare variables:
  - let: for values that can change
  - const: for values that won't change (constants)
  - var: older way (try to avoid using this)
*/

// 1. Declare Variables with let and const:
let age = 25; // Number type
const birthYear = 1999; // Number type (constant)
let name = "John Doe"; // String type
const isStudent = true; // Boolean type (true/false)

// 2. Reassign Values:
// We can change 'let' variables, but not 'const' variables
age = 26; // This works fine
name = "Jane Doe"; // This works fine
// birthYear = 2000       // This will cause an error - can't change a const!
// isStudent = false;     // This will cause an error - can't change a const!

// 3. Print Variables to see their values
console.log(age); // Shows 26
console.log(birthYear); // Shows 1999
console.log(name); // Shows "Jane Doe"
console.log(isStudent); // Shows true

// 4. Create and Modify Variables
let favoriteColor = "blue";
console.log(favoriteColor); // Shows "blue"
favoriteColor = "green"; // We can change it because it's 'let'
console.log(favoriteColor); // Now shows "green"

// ==========================================
// SECTION 2: ARITHMETIC
// ==========================================
/* 
  JavaScript can perform mathematical operations like:
  +  (addition)
  -  (subtraction)
  *  (multiplication)
  /  (division)
  %  (modulus/remainder)
  
  Be careful with mixing numbers and strings!
*/

const num = 6; // Number
const strNum = "11"; // String (notice the quotes)

// Watch what happens with different operations:
console.log(num + strNum); // "611" (concatenates instead of adds!)
console.log(num - strNum); // -5 (converts string to number)
console.log(strNum * 3); // 33 (converts string to number)
console.log(44 / strNum); // 4 (converts string to number)
console.log(45 % "17"); // 11 (remainder after division)
console.log(45 + 13 / "14"); // 45.928571428571426 (follows order of operations)

// ==========================================
// SECTION 3: COMPARISONS
// ==========================================
/* 
  We can compare values using:
  ==  (loose equality - compares value only)
  === (strict equality - compares value AND type)
  >   (greater than)
  <   (less than)
  >=  (greater than or equal)
  <=  (less than or equal)
*/

// Strict vs Simple Equality
console.log('5 == "5": ', 5 == "5"); // true (loose equality - only checks value)
console.log('5 === "5": ', 5 === "5"); // false (strict equality - checks value AND type)

// Number Comparisons
console.log(5 > 3); // true
console.log("5" > "3"); // true (string comparison)
console.log(10 < 20); // true
console.log("10" < "20"); // true
console.log(10 <= "20"); // true (converts string to number)

// ==========================================
// SECTION 4: CONDITIONALS
// ==========================================
/* 
  Conditionals let us make decisions in our code.
  We can execute different code based on different conditions.
  - if/else statements for simple conditions
  - switch statements for multiple specific cases
*/

const temp = 10;

// If-Else Statement Example
if (temp < 15) {
  console.log("Wear a coat"); // This will run if temp is less than 15
} else if (temp >= 15 && temp <= 25) {
  console.log("Wear a sweater"); // This will run if temp is between 15 and 25
} else {
  console.log("Wear a t-shirt"); // This will run if none of the above are true
}

// Switch Statement Example
switch (true) {
  case temp <= 10:
    console.log("Wear a coat");
    break; // Don't forget the break!
  case temp > 10 && temp <= 20:
    console.log("Wear a sweater");
    break;
  default: // Default case if nothing matches
    console.log("Wear a t-shirt");
    break;
}

// ==========================================
// SECTION 5: LOOPS
// ==========================================
/* 
  Loops help us do the same thing multiple times.
  Different types of loops:
  - for loop (when you know how many times to loop)
  - while loop (when you don't know how many times)
  - do-while loop (runs at least once)
*/

const animals = ["lion", "tiger", "bear", "giraffe", "zebra", "monkey"];

// For Loop - Most common type of loop
let totalAnimals = 0;
for (let i = 0; i < animals.length; i++) {
  // i++ means increase i by 1 each time
  totalAnimals++;
}
console.log(`There are ${totalAnimals} animals in the zoo.`);

// While Loop - Keeps going while condition is true
let animals5OrMore = 0;
let i = 0;
while (i < animals.length) {
  if (animals[i].length >= 5) {
    // Counts animals with 5 or more letters
    animals5OrMore++;
  }
  i++;
}
console.log(`There are ${animals5OrMore} animals with 5 or more letters`);

// Do-While Loop - Always runs at least once
let count = 0;
do {
  if (animals[count].startsWith("m")) {
    // Looks for animal starting with 'm'
    break; // 'break' exits the loop early
  }
  count++;
} while (count < animals.length);
console.log(`Count until m: ${count}`);

// ==========================================
// SECTION 6: FUNCTIONS
// ==========================================
/* 
  Functions are reusable blocks of code.
  We can write code once and use it many times.
  There are several ways to create functions:
  1. Function Declaration
  2. Function Expression
  3. Arrow Function
*/

// Function Declaration - Traditional way
function sum(num1, num2) {
  return num1 + num2; // 'return' sends back the result
}

// Function Expression - Storing function in a variable
const sumExpression = function (num1, num2) {
  return num1 + num2;
};

// Arrow Function - Modern, shorter syntax
const helloWorld = () => {
  console.log("Hello, World!");
};

// Arrow Function with Parameter - Even shorter for simple functions
const square = (num) => num * num; // One line, implicit return

// Function with Switch Statement - More complex example
function getDayName(num) {
  switch (num) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Invalid number!"; // If number is not 0-6
  }
}

// Testing our Functions
helloWorld(); // Shows "Hello, World!"
const squareOf5 = square(5);
console.log(squareOf5); // Shows 25
const day3 = getDayName(3);
console.log(day3); // Shows "Wednesday"
const result = sum(20, 50);
console.log(result); // Shows 70

// ==========================================
// SECTION 7: VARIABLES AND SCOPE
// ==========================================
/* 
  Scope determines where variables are accessible:
  - Global scope: accessible everywhere
  - Function scope: only inside the function
  - Block scope: only inside the block (for let/const)
  
  'var' has function scope
  'let' and 'const' have block scope
*/

var myVar = "Global with var"; // Global scope

function test() {
  var myVar = "Function scoped with var"; // Function scope
  console.log(myVar); // Shows "Function scoped with var"
}

test();
console.log(myVar); // Shows "Global with var"

if (true) {
  let myLetVar = "something"; // Block scope
  const myConstVar = "something else"; // Block scope
  var myVar = "re-declared"; // Function scope
  console.log(myLetVar); // Works here
  console.log(myConstVar); // Works here
  console.log(myVar); // Shows "re-declared"
}

// let and const are block-scoped, so these won't work:
// console.log(myLetVar);        // Error: myLetVar is not defined
// console.log(myConstVar);      // Error: myConstVar is not defined
console.log(myVar); // Shows "re-declared" (var is function-scoped)
