// Select DOM elements
const form = document.querySelector("form");
const userInput = document.querySelector("#userInput");
const ul = document.querySelector("ul");
const reloadBtn = document.querySelector("#reload");

// Creates a new list item for a task
const createListItem = (newTask) => {
  // Create necessary DOM elements
  const newLi = document.createElement("li");
  const newP = document.createElement("p");
  const deleteBtn = document.createElement("button");

  // Set attributes and classes for the list item
  newLi.setAttribute("id", newTask.id);
  newLi.className = "flex gap-4 items-baseline px-4 justify-between";

  // Set the task content as paragraph text
  newP.textContent = newTask.content;

  // Configure the delete button
  deleteBtn.textContent = "Delete";
  deleteBtn.className =
    "mt-5 px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded";

  // Add click event listener to the delete button
  deleteBtn.addEventListener("click", (event) => {
    // Get current tasks from localStorage
    const currentTasks = JSON.parse(localStorage.getItem("tasks") || []);

    // Filter out the task to be deleted
    const updatedTasks = currentTasks.filter((task) => task.id !== newTask.id);

    // Update localStorage with the filtered tasks
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    // Remove the list item from the DOM
    event.target.parentElement.remove();
  });

  // Append elements to the list item
  newLi.appendChild(newP);
  newLi.appendChild(deleteBtn);
  return newLi;
};

// Renders all tasks from localStorage to the DOM
const renderStorage = () => {
  // Get tasks from localStorage or use empty array if none exist
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Create and append list items for each task
  tasks.forEach((element) => {
    const newLi = createListItem(element);
    ul.appendChild(newLi);
  });
};

// Initialize the page by rendering existing tasks
renderStorage();

// Add submit event listener to the form
form.addEventListener("submit", (event) => {
  // Prevent default form submission behavior
  event.preventDefault();

  // Validate input - show alert and exit if empty
  if (!userInput.value) return alert("Cannot submit an empty task!");

  // Create a new task object with unique ID
  const newTask = {
    id: "task-" + crypto.randomUUID().replaceAll("-", ""),
    content: userInput.value,
  };

  // Get current tasks from localStorage or use empty array if none exist
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Add new task to the beginning of the tasks array
  const updatedTasks = [newTask, ...tasks];

  // Save updated tasks back to localStorage
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  // Create and add the new task to the DOM
  const newLi = createListItem(newTask);
  ul.insertBefore(newLi, ul.firstChild);

  // Reset the form to clear input
  form.reset();
});

// Add click event listener to reload button
reloadBtn.addEventListener("click", () => {
  // Reload the page to refresh the task list
  window.location.reload();
});
