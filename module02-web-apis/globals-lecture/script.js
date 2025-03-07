// ------------- SetTimeout -------------
// Executing a function with a delay

// Takes two arguments: function + delay
// setTimeout(() => {}, timeout);

// Example 1
setTimeout(() => {
  console.log("Hello");
}, 5000);

// Example 2
const greeting = () => {
  console.log("Hello again");
};

setTimeout(greeting, 2000);

//
//
//
//
// ------------- SetInterval -------------
// Executing a function repeatedly

// Takes two arguments: function + interval
// setInterval(() => {}, interval);

// Example 1
// setInterval(() => {
//   console.log("Hello every 3 seconds");
// }, 3000);

// Example 2
// const constantGreeting = () => {
//   console.log("Hello every 2 seconds");
// };

// setInterval(constantGreeting, 2000);

//
//
//
//
// ------------- clearTimeout -------------
// Stops the execution of a setTimout

// Example
const timeoutId = setTimeout(() => {
  console.log("This message may never show");
}, 3000);

// Cancel after 2 seconds (before timeout triggers)
setTimeout(() => {
  clearTimeout(timeoutId);
  console.log("Timeout cancelled!");
}, 2000);

//
//
//
//
// ------------- clearInterval -------------
// Stops the execution of a setInterval

// Example
const intervalId = setInterval(() => {
  console.log("Running...");
}, 1000);

// Stop after 5 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped!");
}, 5000);
