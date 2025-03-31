import { createContext, useReducer } from 'react';

export const TodosContext = createContext();

// ========== REDUCER IMPLEMENTATION ==========
/**
 * A reducer is a pure function that takes the current state and an action,
 * and returns a new state based on the action type.
 * 
 * Key characteristics of reducers:
 * 1. They are pure functions - same input always produces same output
 * 2. They don't modify the existing state, but return a new state object
 * 3. They use a switch statement to handle different action types
 * 
 * @param {Object} state - The current state object
 * @param {Object} action - An object with a type and optional payload
 * @returns {Object} - The new state
 */
const reducer = (state, action) => {
  // The switch statement checks the action.type to determine what operation to perform
  switch (action.type) {
    // Each case represents a different operation on the state
    case 'ADD_TODO': {
      // Create a new state object with the spread operator to maintain immutability
      return {
        ...state, // Copy all existing state properties
        todos: [
          // Create a new todo item and add it to the beginning of the array
          { id: Date.now(), text: action.payload, completed: false }, 
          ...state.todos // Include all existing todos
        ]
      };
    }
    case 'TOGGLE_TODO': {
      return {
        ...state, // Copy all existing state properties
        todos: state.todos.map(todo =>
          // For the todo that matches the payload ID, toggle its completed status
          // For all other todos, return them unchanged
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        )
      };
    }
    case 'SET_FILTER': {
      return {
        ...state, // Copy all existing state properties
        filter: action.payload // Update only the filter property
      };
    }
    default:
      // If the action type doesn't match any cases, return the state unchanged
      // This is important for handling unknown actions
      return state;
  }
};

const TodosProvider = ({ children }) => {
  /**
   * useReducer is a React Hook that's an alternative to useState for complex state logic
   * 
   * It takes two arguments:
   * 1. The reducer function defined above
   * 2. The initial state object
   * 
   * It returns an array with two elements:
   * 1. The current state
   * 2. A dispatch function to send actions to the reducer
   */
  const [state, dispatch] = useReducer(reducer, { filter: 'all', todos: [] });

  /**
   * To use this in components:
   * 1. Import useContext and TodosContext
   * 2. const { state, dispatch } = useContext(TodosContext)
   * 3. Access state with: state.todos, state.filter
   * 4. Dispatch actions with: dispatch({ type: 'ACTION_TYPE', payload: data })
   *    For example: dispatch({ type: 'ADD_TODO', payload: 'New task' })
   */
  return <TodosContext.Provider value={{ state, dispatch }}>{children}</TodosContext.Provider>;
};

export default TodosProvider;
