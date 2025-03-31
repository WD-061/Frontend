import { createContext, useState, useEffect } from "react";

export const TodosContext = createContext();

const TodosProvider = ({ children }) => {
  // Initialize todos from localStorage or empty array if nothing is stored
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    return storedTodos;
  });
  const [filter, setFilter] = useState("all");

  // Update localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Functions to manipulate state
  const addTodo = (text) => {
    setTodos((prevTodos) => [
      { id: Date.now(), text, completed: false },
      ...prevTodos,
    ]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Context value with state and functions
  const contextValue = {
    todos,
    filter,
    addTodo,
    toggleTodo,
    setFilter,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
