/**
 * JAVASCRIPT ARRAYS
 * ================
 *
 * Arrays are fundamental data structures in JavaScript that allow you to store
 * multiple values in a single variable. They are ordered collections that can
 * hold any type of data (strings, numbers, objects, even other arrays).
 *
 * Key Characteristics of Arrays:
 * - Zero-indexed (first element is at position 0)
 * - Dynamic size (can grow or shrink as needed)
 * - Can contain mixed data types
 * - Have built-in methods for common operations
 * - Are objects in JavaScript (typeof [] returns "object")
 *
 * Array Methods Classification:
 * - Mutating methods: modify the original array (push, pop, splice, etc.)
 * - Non-mutating methods: return a new array (slice, map, filter, etc.)
 *
 * Common Use Cases:
 * - Storing lists of items (users, products, etc.)
 * - Managing collections of related data
 * - Implementing stacks and queues
 * - Iterating through data sets
 */

// Creating arrays
console.log("=== CREATING ARRAYS ===");
const fruits = ["apple", "banana", "orange"]; // Array literal (most common)
const emptyArray = []; // Empty array
const numbers = [1, 2, 3, 4, 5]; // Array of numbers
const mixedArray = [1, 2, "three", "four", 5]; // Mixed array with numbers and strings

console.log("Array of strings:", fruits);
console.log("Empty array:", emptyArray);
console.log("Array of numbers:", numbers);
console.log("Mixed array (numbers and strings):", mixedArray);

// Accessing array elements
console.log("\n=== ACCESSING ELEMENTS ===");
console.log("First element:", fruits[0]); // apple
console.log("Last element:", fruits[fruits.length - 1]); // orange
console.log("Array length:", fruits.length); // 3

/**
 * ARRAY METHODS: ADDING & REMOVING ELEMENTS
 * ========================================
 * JavaScript arrays have several methods for adding and removing elements
 * from the beginning or end of an array.
 */
console.log("\n=== ADDING & REMOVING ELEMENTS ===");
console.log(
  "Note: All methods in this section MUTATE (modify) the original array"
);

// push() - adds element(s) to the end of array
console.log("\n--- push() ---");
const pushArray = ["apple", "banana", "orange"];
console.log("Original array:", pushArray);
// Returns: new length of the array
// MUTATING: Yes - modifies the original array
const pushResult = pushArray.push("grape");
console.log('push("grape") returned:', pushResult);
console.log("After push():", pushArray);

// pop() - removes and returns the last element
console.log("\n--- pop() ---");
const popArray = ["apple", "banana", "orange", "grape"];
console.log("Original array:", popArray);
// Returns: the removed element
// MUTATING: Yes - modifies the original array
const popResult = popArray.pop();
console.log("pop() returned:", popResult);
console.log("After pop():", popArray);

// unshift() - adds element(s) to the beginning
console.log("\n--- unshift() ---");
const unshiftArray = ["apple", "banana", "orange"];
console.log("Original array:", unshiftArray);
// Returns: new length of the array
// MUTATING: Yes - modifies the original array
const unshiftResult = unshiftArray.unshift("mango");
console.log('unshift("mango") returned:', unshiftResult);
console.log("After unshift():", unshiftArray);

// shift() - removes and returns the first element
console.log("\n--- shift() ---");
const shiftArray = ["mango", "apple", "banana", "orange"];
console.log("Original array:", shiftArray);
// Returns: the removed element
// MUTATING: Yes - modifies the original array
const shiftResult = shiftArray.shift();
console.log("shift() returned:", shiftResult);
console.log("After shift():", shiftArray);

/**
 * ARRAY METHODS: MODIFYING ARRAYS
 * ==============================
 * These methods transform arrays or create new arrays based on existing ones.
 * Some methods modify the original array (mutating), while others return a new array (non-mutating).
 */
console.log("\n=== MODIFYING ARRAYS ===");

// reverse() - reverses the array in place
console.log("\n--- reverse() ---");
const reverseArray = ["apple", "banana", "orange"];
console.log("Original array:", reverseArray);
// Returns: the reversed array (same reference)
// MUTATING: Yes - modifies the original array
const reverseResult = reverseArray.reverse();
console.log("reverse() returned:", reverseResult);
console.log("After reverse():", reverseArray);
console.log("Are they the same array?", reverseResult === reverseArray); // true

// Creating a new reversed array (without modifying original)
console.log("\n--- Non-mutating reverse ---");
const originalArray = ["apple", "banana", "orange"];
console.log("Original array:", originalArray);
// NON-MUTATING ALTERNATIVE: Create a copy first, then reverse
const reversedArray = originalArray.slice(); // Create a copy using slice()
reversedArray.reverse();
console.log("New reversed array:", reversedArray);
console.log("Original array unchanged:", originalArray);

// splice() - changes array by removing/replacing elements
console.log("\n--- splice() ---");
const spliceArray = ["apple", "banana", "orange", "grape"];
console.log("Original array:", spliceArray);
// syntax: splice(start, deleteCount, item1, item2, ...)
// Returns: array of deleted elements
// MUTATING: Yes - modifies the original array
const spliceResult = spliceArray.splice(1, 1, "kiwi", "pear");
console.log('splice(1, 1, "kiwi", "pear") returned:', spliceResult);
console.log("After splice():", spliceArray);

// Creating a new spliced array (without modifying original)
console.log("\n--- Non-mutating splice ---");
const originalForSplice = ["apple", "banana", "orange", "grape"];
console.log("Original array:", originalForSplice);
// NON-MUTATING ALTERNATIVE: Create a copy first, then splice
const splicedArray = originalForSplice.slice(); // Create a copy using slice()
splicedArray.splice(0, 2, "cherry");
console.log("New spliced array:", splicedArray);
console.log("Original array unchanged:", originalForSplice);

// slice() - returns a portion of an array (original unchanged)
console.log("\n--- slice() ---");
const sliceArray = ["apple", "banana", "orange", "grape", "kiwi"];
console.log("Original array:", sliceArray);
// syntax: slice(start, end) - end is not included
// Returns: new array with extracted elements
// NON-MUTATING: Yes - returns a new array, original unchanged
const sliceResult = sliceArray.slice(1, 3);
console.log("slice(1, 3) returned:", sliceResult);
console.log("After slice() (unchanged):", sliceArray);

// join() - creates a string from array elements
console.log("\n--- join() ---");
const joinArray = ["apple", "banana", "orange", "grape"];
console.log("Original array:", joinArray);
// Returns: string with all array elements joined
// NON-MUTATING: Yes - returns a string, original unchanged
const joinResult = joinArray.join(", ");
console.log('join(", ") returned:', joinResult);
console.log("After join() (unchanged):", joinArray);
