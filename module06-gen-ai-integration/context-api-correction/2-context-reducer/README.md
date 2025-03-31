# Thinking in React: Context API with useReducer

- [Part I](https://learn.wbscodingschool.com/courses/full-stack-web-app/lessons/%f0%9f%a7%a9-thinking-in-react/)
- [Part II](https://learn.wbscodingschool.com/courses/full-stack-web-app/lessons/%f0%9f%a7%a9-thinking-in-react-ii/)

## Understanding the useReducer Hook with Context API

### What is useReducer?

`useReducer` is a React Hook that is an alternative to `useState` for managing complex state logic. It's especially useful when:

1. You have complex state logic involving multiple sub-values
2. The next state depends on the previous state
3. You need to update state in a more predictable way

### How Reducers Work

A reducer is a pure function that takes two arguments:
1. The current state
2. An action object (typically with `type` and optional `payload` properties)

It returns the new state based on the action type. The basic pattern looks like this:

```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'ACTION_1':
      // Return new state for ACTION_1
      return { ...state, property: newValue };
    case 'ACTION_2':
      // Return new state for ACTION_2
      return { ...state, anotherProperty: action.payload };
    default:
      // Return unchanged state for unknown actions
      return state;
  }
}
```

### Key Concepts of Reducers

1. **Pure Functions**: Reducers should be pure functions - given the same inputs, they always produce the same output without side effects.

2. **Immutability**: Reducers never modify the existing state. Instead, they create a new state object with the changes.

3. **Action Objects**: Actions are plain JavaScript objects that describe what happened. They typically have:
   - A `type` property (a string that identifies the action)
   - An optional `payload` property (data needed for the state change)

4. **Predictable State Updates**: By centralizing state update logic in a reducer, changes become more predictable and easier to debug.

### Combining useReducer with Context API

When we combine `useReducer` with Context API, we get a powerful state management solution:

1. The reducer handles all state updates in one place
2. The context provides state and dispatch function to all components
3. Components can access state and dispatch actions without prop drilling

## Implementation in This Project

### The Provider (src/context/TodosProvider.jsx)

```jsx
import { createContext, useReducer } from 'react';

// Create a context
export const TodosContext = createContext();

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO': 
      return {
        ...state,
        todos: [{ id: Date.now(), text: action.payload, completed: false }, ...state.todos]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};

// Create the provider component
const TodosProvider = ({ children }) => {
  // Initialize useReducer with the reducer function and initial state
  const [state, dispatch] = useReducer(reducer, { filter: 'all', todos: [] });

  // Provide state and dispatch to all children
  return <TodosContext.Provider value={{ state, dispatch }}>{children}</TodosContext.Provider>;
};

export default TodosProvider;
```

### Using the Context in Components

#### Accessing State (ToDoList.jsx)

```jsx
import { useContext } from 'react';
import { TodosContext } from '../context/TodosProvider';

const ToDoList = () => {
  // Get state from context
  const { state } = useContext(TodosContext);
  
  // Use state.todos and state.filter
  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'all') return true;
    // ...other filter logic
  });
  
  return (/* JSX using filteredTodos */);
};
```

#### Dispatching Actions (AddToDo.jsx)

```jsx
import { useContext } from 'react';
import { TodosContext } from '../context/TodosProvider';

const AddToDo = () => {
  // Get dispatch function from context
  const { dispatch } = useContext(TodosContext);
  
  const handleSubmit = e => {
    e.preventDefault();
    // Dispatch an action to add a todo
    dispatch({ type: 'ADD_TODO', payload: newTodo });
  };
  
  return (/* JSX for the form */);
};
```

## Benefits of This Approach

1. **Centralized State Logic**: All state update logic is in one place (the reducer)
2. **Simplified Component Logic**: Components only need to dispatch actions, not handle state updates
3. **Easier Testing**: Pure reducer functions are easy to test
4. **Predictable State Changes**: State changes follow a clear pattern
5. **Debugging**: Actions provide a clear history of state changes

## When to Use useReducer with Context

This pattern is particularly useful when:
- Your application has complex state logic
- Multiple components need to update the same state
- You want to avoid prop drilling
- You need more predictable state updates

For simpler applications, useState with Context might be sufficient. As your application grows in complexity, consider migrating to useReducer with Context or even to Redux for very large applications.
