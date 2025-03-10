// ========================================================================
// ======================= LOCAL STORAGE BASICS ===========================
// ========================================================================

// localStorage.setItem("myKey", "This is the value!");
// localStorage.setItem("myKey", "A Different value!");

// const key = localStorage.getItem("myKey");
// console.log(key);

// localStorage.removeItem("myKey");

// localStorage.setItem("myKey2", "And this is the value2");
// localStorage.setItem("myKey3", "And this is the value3");
// localStorage.setItem("myKey4", "And this is the value4");

// localStorage.clear();

// ========================================================================
// ======================= SPREAD OPERATOR EXAMPLE ========================
// ========================================================================

// function sum(x, y, z) {
//   return x + y + z;
// }

// const numbers = [1, 2, 3];

// console.log(sum(...numbers));
// Expected output: 6

// ========================================================================
// =================== TODO LIST APPLICATION ==============================
// ========================================================================

// Get references to DOM elements
const itemForm = document.getElementById("itemForm");
const itemInput = document.getElementById("itemInput");
const itemsList = document.getElementById("itemsList");

// ========================================================================
// Create List Item Function
// ========================================================================

// Function to create a list item element
const createListItem = (item) => {
  const li = document.createElement("li");
  li.className =
    "flex justify-between items-center py-2 px-3 border-b last:border-0";

  const textElement = document.createElement("p");
  textElement.textContent = item.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "text-red-500 hover:text-red-700 ml-2";
  deleteBtn.innerHTML = "&times;";

  // Use closure to capture the item's ID
  const itemId = item.id;
  deleteBtn.addEventListener("click", () => {
    // Get current items from localStorage
    const items = JSON.parse(localStorage.getItem("todoItems") || "[]");

    // Remove from localStorage using the captured ID
    const updatedItems = items.filter((item) => item.id !== itemId);
    localStorage.setItem("todoItems", JSON.stringify(updatedItems));

    // Remove from DOM
    li.remove();
  });

  li.appendChild(textElement);
  li.appendChild(deleteBtn);
  return li;
};

// ========================================================================
// Load Items Function
// ========================================================================

// Load existing items when the page loads
const loadItems = () => {
  const items = JSON.parse(localStorage.getItem("todoItems") || "[]");
  items.forEach((item) => {
    const li = createListItem(item);
    itemsList.appendChild(li);
  });
};

// Load items when the page loads
loadItems();

// ========================================================================
// Form Submit Event Handler
// ========================================================================

// Add event listener to the form for submit events
itemForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const itemText = itemInput.value.trim();
  if (itemText === "") return;

  // Get items from localStorage
  const items = JSON.parse(localStorage.getItem("todoItems") || "[]");

  // Create new item with ID based on array length + 1
  const newItem = {
    id: items.length + 1,
    text: itemText,
  };
  items.push(newItem);

  // Save to localStorage
  localStorage.setItem("todoItems", JSON.stringify(items));

  // Create and add list item to DOM
  const li = createListItem(newItem);
  itemsList.appendChild(li);

  // Clear input and focus
  itemInput.value = "";
  itemInput.focus();
});
