// =============================================
// 1. HIGHER ORDER FUNCTIONS AS FUNCTION CONSUMERS
// =============================================
// Higher Order Functions can take one or more functions as arguments. Example:

const sayWelcome = () => "Welcome, ";
const sayGoodbye = () => "Goodbye, ";

const personalMessage = (message, name) => {
  console.log(message() + name);
};

personalMessage(sayWelcome, "John Doe!");
personalMessage(sayGoodbye, "John Doe!");

// We are passing our message functions as arguments to the personalMessage() function.

// =============================================
// 2. HIGHER ORDER FUNCTIONS AS FUNCTION FACTORIES
// =============================================
// Higher Order Functions can return another function as its result. Example:

const sayHello = (name) => {
  return () => {
    console.log(`Hello, ${name}!`);
  };
};

const helloJohn = sayHello("John");
const helloAlice = sayHello("Alice");
helloJohn();
helloAlice();

// A function that:
// - takes another function as an argument, OR
// - returns a function
// is called a Higher Order Function.

// That's why array methods like map, sort, filter etc. are all Higher Order Functions.
// They are premade functions for us to use which fulfill at least one of the two characteristics of Higher Order Functions.

// =============================================
// 3. COMMON HIGHER ORDER FUNCTIONS IN JAVASCRIPT
// =============================================

// 1. forEach - Executes a provided function once for each array element
console.log("\nforEach example:");
const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit, index) => {
  console.log(`${index + 1}: ${fruit}`);
});
// Expected output:
// 1: apple
// 2: banana
// 3: cherry

// 2. map - Creates a new array with the results of calling a function for every array element
console.log("\nmap example:");
const numbers2 = [1, 2, 3, 4, 5];

const doubled = numbers2.map((number) => number * 2);

console.log(doubled);
console.log(numbers2);
// Expected output: [2, 4, 6, 8, 10]

// 3. find - Returns the first element in the array that satisfies the provided testing function
console.log("\nfind example:");
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jim", age: 35 },
];

const person30 = people.find((person) => person.age === 30);
console.log(person30);
// Expected output: { name: 'Jane', age: 30 }

// 4. filter - Creates a new array with all elements that pass the test implemented by the provided function
console.log("\nfilter example:");
const words = ["random", "words", "balcony", "dog", "bootcamp"];

const longWords = words.filter((word) => word.length > 6);
console.log(longWords);
// Expected output: ["balcony", "bootcamp"]

// 5. reduce - Executes a reducer function on each element of the array, resulting in a single output value
console.log("\nreduce example:");
const numbers3 = [1, 2, 3, 4, 5];

const sum = numbers3.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);
// Expected output: 15 (1 + 2 + 3 + 4 + 5)

// All of these methods are Higher Order Functions because they take a function as an argument.
// The functions passed to them are called callback functions.

// =============================================
// 4. CUSTOM FILTER FUNCTION EXAMPLE
// =============================================

// Prepared array of numbers
const numbers = [1, 2, 3, 4, 5];

// Example of a custom filter function that can do the same as the filter array method:
const filterNumbers = () => {
  const isEven = (number) => number % 2 === 0;

  return (array) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (isEven(array[i])) {
        result.push(array[i]);
      }
    }
    return console.log(result);
  };
};

// Store a filter function created from the filterNumbers function:
const filterEvenNumbers = filterNumbers();

// Use the filter function on the prepared array:
console.log("\ncustom filter + filter array method example:");
filterEvenNumbers(numbers);
// Expected output: [ 2, 4 ]

// As comparison: Use the built-in array method filter to filter even numbers:
const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers);
// Expected output: [ 2, 4 ]

// =============================================
// 5. CALLBACK FUNCTIONS
// =============================================
// A callback function is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of routine or action. - MDN

// In this example: The function number => number % 2 === 0 is passed as an argument to .filter().
// This function returns true for even numbers (i.e., numbers that are divisible by 2),
// which means only even numbers will be included in the new array.

// Result: The evenNumbers array will contain only the even numbers from the original numbers array,
// achieving the same result as the custom function.
