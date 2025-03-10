// Get elements from DOM
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const reload = document.querySelector("#reload");

// Add event listener for form submission
form.addEventListener("submit", (e) => {
  // Prevent default to avoid reload of page
  e.preventDefault();

  // Check input has a value
  const userInput = e.target.elements.userInput.value;
  if (!userInput) return alert("Please enter something before submitting");

  // Get previous content from localStorage: key name "myQuotes"
  const myQuotes = JSON.parse(localStorage.getItem("myQuotes")) || [];

  // Adding quote to DOM - create new list item
  const li = document.createElement("li");
  li.textContent = userInput;
  // Insert at the beginning of the list
  ul.insertBefore(li, ul.firstElementChild);

  // Adding quote to localStorage - add to beginning of array
  myQuotes.unshift(userInput);
  // Save updated quotes back to localStorage
  localStorage.setItem("myQuotes", JSON.stringify(myQuotes));

  // Reset form to clear input field
  e.target.reset();
});

// Reload event - refresh the page when reload button is clicked
reload.addEventListener("click", () => {
  window.location.reload();
});

// Read and load data when page loads
window.addEventListener("load", () => {
  // Get previous content from localStorage: key name "myQuotes"
  const myQuotes = JSON.parse(localStorage.getItem("myQuotes")) || [];

  // Loop through each quote and add to the DOM
  myQuotes.forEach((q) => {
    // Adding quote to DOM - create new list item
    const li = document.createElement("li");
    li.textContent = q;
    // Add to the end of the list
    ul.appendChild(li);
  });
});
