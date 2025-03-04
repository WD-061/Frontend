/*==========================================================================
 * SECTION 1: ACCESSING THE DOCUMENT OBJECT
 *==========================================================================*/
// The document object gives access to the entire HTML document structure

console.log(document); // The entire document object
console.log(document.body); // The body element
console.log(document.firstChild); // First child of the document (usually DOCTYPE)

/*==========================================================================
 * SECTION 2: SELECTING ELEMENTS
 *==========================================================================*/

// 2.1 Using querySelector (returns the first matching element)
console.log(document.querySelector("body")); // Element selector
console.log(document.querySelector("#outer-container")); // ID selector
console.log(document.querySelector(".bodyClass")); // Class selector

// 2.2 Using getElementsByClassName (returns HTMLCollection of all matching elements)
// NOTE: Returns a LIVE collection that updates automatically when DOM changes
console.log(document.getElementsByClassName("bodyClass"));

// 2.3 Using getElementById (preferred for ID selection - faster and more specific)
console.log(document.getElementById("click-button"));

// 2.4 Using querySelectorAll (returns NodeList of all matching elements)
// NOTE: Returns a STATIC NodeList that doesn't update when DOM changes
const allDivs = document.querySelectorAll("div");
console.log("All divs:", allDivs);

/*==========================================================================
 * SECTION 3: STORING ELEMENTS IN VARIABLES
 *==========================================================================*/
// Best practice: Store elements you'll use multiple times in variables
const clickButton = document.getElementById("click-button");
const outerContainer = document.getElementById("outer-container");

console.log(clickButton);
console.log(outerContainer);

/*==========================================================================
 * SECTION 4: ACCESSING ELEMENT CONTENT
 *==========================================================================*/
const h1 = document.getElementById("main-heading");
console.log(h1); // The entire element
console.log(h1.innerText); // Only visible text content (respects CSS styling)
console.log(h1.textContent); // All text content regardless of visibility
console.log(h1.innerHTML); // HTML content including tags (security risk with user input!)

/*==========================================================================
 * SECTION 5: MODIFYING ELEMENTS
 *==========================================================================*/

// 5.1 Changing text content
h1.innerText = "DOM Manipulation is Fun!";

// 5.2 Modifying Tailwind classes
h1.className = "text-4xl font-bold text-blue-600 mb-4 text-center";

// 5.3 Alternative way to modify classes using classList
h1.classList.remove("text-blue-600");
h1.classList.add("text-green-500");
h1.classList.add("underline");
// You can also toggle classes: h1.classList.toggle("underline");

// 5.4 Simple button click example
// When the button is clicked, change its text and add a new class
clickButton.addEventListener("click", () => {
  // Change the button text
  clickButton.innerText = "Clicked!";

  // Add a simple color class
  clickButton.classList.add("bg-green-500");

  // Change the heading text too
  h1.innerText = "Button was clicked!";
});

/*==========================================================================
 * SECTION 6: CREATING AND APPENDING ELEMENTS
 *==========================================================================*/
// Create a new paragraph element
const newParagraph = document.createElement("p");

// Add content and attributes
newParagraph.textContent = "This paragraph was created dynamically!";
newParagraph.className = "text-purple-500 mt-4 text-center";
newParagraph.id = "dynamic-paragraph";

// Append to the DOM
outerContainer.appendChild(newParagraph);

/*==========================================================================
 * SECTION 7: EVENT HANDLING
 *==========================================================================*/
// Multiple ways to add event listeners:

// Method 1: addEventListener (preferred - allows multiple listeners)
clickButton.addEventListener("mouseover", () => {
  clickButton.classList.add("scale-110");
});

clickButton.addEventListener("mouseout", () => {
  clickButton.classList.remove("scale-110");
});

// Method 2: onclick property (only allows one listener)
// clickButton.onclick = () => alert("Button clicked!");

/*==========================================================================
 * SECTION 8: IMPORTANT NOTES & BEST PRACTICES
 *==========================================================================*/
// 1. Use the 'defer' attribute in script tag to ensure DOM is loaded before script runs
// 2. innerText returns only visible text and respects CSS styling
// 3. textContent returns all text including hidden elements and preserves whitespace
// 4. innerHTML can be a security risk (XSS) when used with user input
// 5. For performance, getElementById is faster than querySelector for ID selection
// 6. HTMLCollection (from getElementsBy*) is LIVE, NodeList (from querySelectorAll) is STATIC
// 7. Store frequently accessed DOM elements in variables to improve performance
