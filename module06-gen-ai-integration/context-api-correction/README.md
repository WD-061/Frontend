# Thinking in React: From Prop Drilling to Context API

- [Part I](https://learn.wbscodingschool.com/courses/full-stack-web-app/lessons/%f0%9f%a7%a9-thinking-in-react/)
- [Part II](https://learn.wbscodingschool.com/courses/full-stack-web-app/lessons/%f0%9f%a7%a9-thinking-in-react-ii/)

## Step-by-Step Migration to Context API

### Step 1: Identify and Remove State and Logic from App.jsx

Before implementing the Context API, we need to identify what needs to be moved from App.jsx to our context provider:

#### Before (App.jsx with prop drilling):

```jsx
import { useState, useEffect } from 'react';
import AddToDo from './components/AddToDo';
import FilterComponent from './components/FilterComponent';
import ToDoList from './components/ToDoList';

const App = () => {
  // State that will be moved to context
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    return storedTodos;
  });
  const [filter, setFilter] = useState("all");

  // Functions that will be moved to context
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

  // Effect that will be moved to context
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container mx-auto p-4">
      {/* Components receiving props that will be removed */}
      <AddToDo addTodo={addTodo} />
      <FilterComponent filter={filter} setFilter={setFilter} />
      <ToDoList todos={todos} filter={filter} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
```

#### After (App.jsx simplified):

```jsx
import AddToDo from './components/AddToDo';
import FilterComponent from './components/FilterComponent';
import ToDoList from './components/ToDoList';
import TodosProvider from './context/TodosProvider';

const App = () => {
  return (
    <TodosProvider>
      <div className='container mx-auto p-4'>
        <AddToDo />
        <FilterComponent />
        <ToDoList />
      </div>
    </TodosProvider>
  );
};

export default App;
```

### Step 2: Create a Context and Provider

```jsx
// src/context/TodosProvider.jsx
import { createContext, useState, useEffect } from "react";

export const TodosContext = createContext();

const TodosProvider = ({ children }) => {
  // State that was previously in App.jsx
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    return storedTodos;
  });
  const [filter, setFilter] = useState("all");

  // Functions that were previously passed as props
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

  // Local storage persistence
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Value to be provided to consumers
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
```

### Step 3: Consume Context in Components

#### Before (with prop drilling):

```jsx
// Component for filtering the to-do list
// Accepts setFilter function to update the filter state
const FilterComponent = ({ setFilter }) => {
  // Updates the filter state based on user selection
  const setFilterInView = filter => {
    setFilter(filter);
  };

  // Renders buttons to select the filter type
  return (
    <div className='mb-4 flex space-x-2'>
      <button onClick={() => setFilterInView('all')} className='bg-gray-200 px-3 py-1 rounded'>
        All
      </button>
      <button onClick={() => setFilterInView('active')} className='bg-gray-200 px-3 py-1 rounded'>
        Active
      </button>
      <button
        onClick={() => setFilterInView('completed')}
        className='bg-gray-200 px-3 py-1 rounded'
      >
        Completed
      </button>
    </div>
  );
};

export default FilterComponent;
```

#### After (with Context API):

```jsx
// Component for filtering the to-do list using Context API
import { useContext } from 'react';
import { TodosContext } from '../context/TodosProvider';

const FilterComponent = () => {
  // Get setFilter from context instead of props
  const { setFilter } = useContext(TodosContext);
  
  // Updates the filter state based on user selection
  const setFilterInView = filter => {
    setFilter(filter);
  };

  // Renders buttons to select the filter type
  return (
    <div className='mb-4 flex space-x-2'>
      <button onClick={() => setFilterInView('all')} className='bg-gray-200 px-3 py-1 rounded'>
        All
      </button>
      <button onClick={() => setFilterInView('active')} className='bg-gray-200 px-3 py-1 rounded'>
        Active
      </button>
      <button
        onClick={() => setFilterInView('completed')}
        className='bg-gray-200 px-3 py-1 rounded'
      >
        Completed
      </button>
    </div>
  );
};

export default FilterComponent;
```

## Key Points About This Migration

1. **Centralized State Management**

   - All state and related functions are now defined in one place (TodosProvider)
   - Makes the code more maintainable and easier to debug

2. **Elimination of Prop Drilling**

   - Components no longer need to pass props through multiple levels
   - Intermediate components don't need to be aware of props they don't use

3. **Component Simplification**

   - Components only access the specific context values they need
   - Props interfaces are simplified or eliminated entirely

4. **Preserved Functionality**

   - Local storage persistence works the same way
   - The application behaves identically from a user perspective

5. **Improved Scalability**
   - Adding new features that require shared state is easier
   - New components can easily access existing state without prop changes

## When to Use Context API

Context API is ideal for:

- Sharing state that is considered "global" for a tree of components
- User preferences, themes, authentication status
- Data that many components need access to at different nesting levels

However, it's not always the best solution:

- For simple component trees, props might be clearer
- For very complex state management, consider Redux or other specialized libraries
- For performance-critical applications, be aware of potential re-render issues

## Data Flow with Context API

1. User interacts with a component (e.g., adds a new todo)
2. Component calls a function from context (e.g., `addTodo("New task")`)
3. The function in the provider updates the state
4. State changes trigger the useEffect hook, which updates localStorage
5. All components consuming that piece of state re-render with the updated values

This pattern creates a unidirectional data flow that is predictable and easier to debug.
