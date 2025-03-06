// ===================================================================================
// Fetch API Example - Todo List with Error Handling
// ===================================================================================

// Get reference to the DOM element where todos will be displayed
const todoListElement = document.getElementById("todo-list");

/**
 * Fetches todos from the JSON Placeholder API
 * Includes error handling for failed requests
 */
const fetchTodos = async () => {
  try {
    // Fetch data from the API with a limit of 10 todos
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );

    // Check if the response was successful
    if (!response.ok) {
      throw new Error(`Something went wrong. Status: ${response.status}`);
    }

    // Parse the JSON response
    const todos = await response.json();

    // Display the todos in the DOM
    displayTodos(todos);
  } catch (error) {
    // Log any errors to the console
    console.error(error);
  }
};

// Displays the todo items in the DOM
const displayTodos = (todos) => {
  // Loop through the todos and create list items for each
  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.textContent = todo.title;
    todoItem.classList.add("mb-2");

    // Add styling based on completion status
    if (todo.completed) {
      todoItem.classList.add("line-through", "text-green-500");
    } else {
      todoItem.classList.add("text-red-500");
    }

    todoListElement.appendChild(todoItem);
  });
};

// Fetch and display todos on page load
fetchTodos();
