// ==========================================
// Task 1: ForEach
// ==========================================

//1. Initialize an Array of Numbers:
const numbers = [1, 2, 3, 4, 5];

//2. Use the forEach Method to Print Each Number:
// Use the forEach method to iterate over numbers and print each number to the console.
numbers.forEach((number) => {
  console.log("Number: ", number);
});

//3. Use the forEach Method to Calculate the Sum of the Numbers:
// Initialize a variable sum to 0.
let sum = 0;

// Use the forEach method to iterate over numbers, adding each number to sum.
numbers.forEach((num) => (sum += num));

// Print the final value of sum to the console.
console.log("sum: ", sum);

//4. Use the forEach Method to Create a New Array with Squared Values:
// Create an empty array called squaredNumbers.
const squaredNumbers = [];

// Use the forEach method to iterate over numbers,
// squaring each number and adding the squared value to squaredNumbers.
numbers.forEach((number) => {
  // squaredNumbers.push(number ** 2);
  squaredNumbers.push(number * number);
});

// Print the squaredNumbers array to the console.
console.log("Squared Numbers: ", squaredNumbers);

// ==========================================
// Task 2: Map
// ==========================================

//1. Initialize an Array of Numbers:
// const numbers = [1, 2, 3, 4, 5];

//2. Use the map Method to Create a New Array with Doubled Values:
// Use the map method to create a new array called
// doubledNumbers where each value is double the corresponding value in numbers.
const doubledNumbers = numbers.map((num) => num * 2);

// Print the doubledNumbers array to the console.
console.log("Doubled Numbers: ", doubledNumbers);

//3. Use the map Method to Create a New Array of Strings:
// Use the map method to create a new array called stringNumbers where each value
// is the corresponding number in numbers converted to a string with the
// prefix "Number: ".
const stringNumbers = numbers.map((number) => `Number: ${number}`);

// Print the stringNumbers array to the console.
console.log("stringNumbers: ", stringNumbers);

//4. Use the map Method to Create a New Array of Objects:
// Use the map method to create a new array called numberObjects
// where each value is an object with the properties original
// (the original number) and squared (the square of the number).
const numberObjects = numbers.map((number) => ({
  original: number,
  squared: number * number,
}));

// Print the numberObjects array to the console.
console.log("numberObjects: ", numberObjects);

// ==========================================
// Task 3: Find
// ==========================================

//1. Initialize an Array of Numbers:
// const numbers = [10, 20, 30, 40, 50];

//2. Use the find Method to Locate a Number Greater Than 25:
// Use the find method to locate the first number in numbers that is
//  greater than 25.
const foundNumber = numbers.find((num) => num > 2);
// Print the found number to the console.
console.log("foundNumber: ", foundNumber);

//3. Initialize an Array of Objects:
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];

//4. Use the find Method to Locate a Person Named "Charlie":
// Use the find method to locate the first object in people where
// the name property is "Charlie".
const charlie = people.find((person) => person.name === "Charlie");
// Print the found object to the console.
console.log("charlie: ", charlie);

// ==========================================
// Task 4: Filter
// ==========================================

//1. Initialize an Array of Numbers:
// const numbers = [5, 10, 15, 20, 25, 30];

//2. Use the filter Method to Create a New Array with Numbers Greater Than 15:
// Use the filter method to create a new array called numbersGreaterThan15
// containing all numbers from numbers that are greater than 15.
const numbersGreaterThan15 = numbers.filter((num) => num > 15);

// Print the numbersGreaterThan15 array to the console.
console.log("numbersGreaterThan15: ", numbersGreaterThan15);

//3. Initialize an Array of Objects:
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 },
  { name: "David", grade: 88 },
  { name: "Eve", grade: 95 },
];

//4.Use the filter Method to Create a New Array with Students Who Scored Above 80:
// Use the filter method to create a new array called studentsAbove80
// containing all students from students who scored above 80.
const studentsAbove80 = students.filter((student) => student.grade > 80);

// Print the studentsAbove80 array to the console.
console.log("studentsAbove80: ", studentsAbove80);

// ==========================================
// Task 5: Some and Every
// ==========================================

//1. Initialize an Array of Numbers:
// const numbers = [4, 8, 15, 16, 23, 42];

//2. Use the some Method to Check for Numbers Greater Than 20:
// Use the some method to check if there are any numbers in numbers
// that are greater than 20.
const isAnyGreaterThan20 = numbers.some((num) => num > 20);

// Print the result to the console (should be true).
console.log("isAnyGreaterThan20: ", isAnyGreaterThan20);

//3. Use the every Method to Check for Numbers Less Than 50:
// Use the every method to check if all numbers in numbers are less
// than 50.
const allNumbersLessThan50 = numbers.every((num) => num < 50);

// Print the result to the console (should be true).
console.log(
  "are all less than 50: ",
  numbers.every((num) => num < 50)
);

//4.Initialize an Array of Objects:
const students2 = [
  { name: "Alice", age: 25, passed: true },
  { name: "Bob", age: 22, passed: false },
  { name: "Charlie", age: 27, passed: true },
  { name: "David", age: 20, passed: true },
];

//5. Use the some Method to Check if Any Student Failed:
// Use the some method to check if there are any students in
// students who have passed set to false.
// const ifAnyFailed = students.some((student) => student.passed === false);
const ifAnyFailed = students2.some((student) => !student.passed);

// Print the result to the console (should be true).
console.log("ifAnyFailed: ", ifAnyFailed);

//6. Use the every Method to Check if All Students are Older Than 18:
// Use the every method to check if all students in students are
// older than 18.
const ifAllOlderThan18 = students2.every((student) => student.age > 18);

// Print the result to the console (should be true).
console.log("ifAllOlderThan18: ", ifAllOlderThan18);
