import { useState } from "react";

import AddToDo from "./components/AddToDo";
import FilterComponent from "./components/FilterComponent";
import ToDoList from "./components/ToDoList";

// Main App component
// Manages the state of the to-do list and the current filter
const App = () => {
  // State to store the list of to-dos
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  // State to store the current filter (all, completed, active)
  const [filter, setFilter] = useState("all");

  // Toggles the completion status of a to-do item
  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      const newState = prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    });
  };

  // Filters the to-dos based on the current filter state
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed" && todo.completed) return true;
    if (filter === "active" && !todo.completed) return true;
    return false;
  });

  // Renders the main components of the app
  return (
    <div className="container mx-auto p-4">
      <AddToDo setTodos={setTodos} />
      <FilterComponent setFilter={setFilter} />
      <ToDoList todos={filteredTodos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
