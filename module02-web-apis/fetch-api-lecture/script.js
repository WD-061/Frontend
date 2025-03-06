/**
 * FETCH API EXAMPLES
 * 
 * The Fetch API is a modern way to make network requests in JavaScript.
 * It lets you get data from servers (like RESTful APIs) or send data to them.
 * Think of it as a messenger that goes to a website, gets information,
 * and brings it back to your code - all without refreshing the page!
 */

// EXAMPLE 1: .then Promise Chain Method
// This is the traditional way of handling promises with .then() chains

const fetchFunction = () => {
  fetch("https://jsonplaceholder.typicode.com/posts") // Returns a Promise that resolves to a Response object
    .then((response) => {
      // First .then() handles the Response object
      if (!response.ok) {
        // Always check if the response is OK (status 200-299)
        throw new Error(`Something went wrong. Status: ${response.status}`);
      } else {
        return response.json(); // Parse JSON response - this returns another Promise!
      }
    })
    .then((data) => console.log(data)) // Second .then() handles the parsed JSON data
    .catch((error) => console.error(error)); // Catch any errors in the promise chain
};

fetchFunction();

// EXAMPLE 2: Async/Await Method
// This is a more modern and cleaner syntax for handling promises
// It makes asynchronous code look more like synchronous code

const fetchFunctionAsyncAwait = async () => {
  try {
    // await pauses execution until the promise resolves
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    if (!response.ok) {
      throw new Error(`Something went wrong. Status: ${response.status}`);
    }
    
    // await again to parse the JSON response
    const data = await response.json();
    console.log(data);
    
    // IMPORTANT: async/await is just syntactic sugar over promises
    // Under the hood, it's still using promises!
  } catch (error) {
    // try/catch is used for error handling with async/await
    console.error(error);
  }
};

fetchFunctionAsyncAwait();

/**
 * KEY DIFFERENCES BETWEEN .THEN AND ASYNC/AWAIT:
 * 
 * 1. Readability: async/await is generally more readable, especially for complex operations
 * 2. Error handling: try/catch blocks vs .catch() methods
 */

// EXAMPLE 3: Practical Application - Using fetched data with DOM manipulation
// This demonstrates a real-world use case of fetch

async function fetchAndDisplayPost() {
  try {
    // Fetch a single post (with ID 1) from the API
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();
    
    // Create a DOM element to display the fetched data
    const postDiv = document.createElement("div");

    // Style the element 
    postDiv.style.padding = "10px";
    postDiv.style.border = "1px solid #ccc";

    // Populate the element with data using template literals
    // SECURITY NOTE: innerHTML is potentially dangerous
    postDiv.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.body}</p>
      `;

    // Add the element to the page
    document.body.appendChild(postDiv);
  } catch (error) {
    console.error(error);
  }
}

fetchAndDisplayPost();

/**
 * IMPORTANT FETCH API NOTES:
 * 
 * 1. fetch() returns a Promise that resolves to a Response object
 * 2. The Response is NOT the actual data - you need to call .json() or other methods to extract the data
 * 3. .json() also returns a Promise that resolves to the parsed JSON
 * 4. Always check response.ok before proceeding (response.ok is true if status is 200-299)
 * 5. fetch() won't reject on HTTP error status (like 404 or 500) - you must check response.ok
 * 6. fetch() will reject on network errors or if the request couldn't be made
 * 7. For POST requests, you need to specify method, headers, and body
 */
