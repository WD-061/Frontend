import { createContext, useState, useContext } from "react";

// Create a context object that will be used to share data across components
// When React renders a component that subscribes to this Context object
// it will read the current context value from the closest matching Provider above it in the tree
const UserContext = createContext();

// UserProvider is a component that wraps its children with the Context Provider
// This makes the context value available to all components within its tree
export const UserProvider = ({ children }) => {
  // State that will be shared through context
  // Any component within the Provider can access these values and they will
  // automatically re-render when these values change
  const [user, setUser] = useState("John");
  const [age, setAge] = useState(30);

  return (
    // The Provider component accepts a value prop that will be passed to consuming components
    // All components that are descendants of a Provider will re-render whenever the Provider's value prop changes
    <UserContext.Provider value={{ user, age }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

// Custom hook that simplifies consuming the context
// Instead of using useContext(UserContext) directly in components,
// we can use this custom hook which provides better encapsulation
// and makes the code more readable and maintainable
export const useUser = () => {
  // useContext hook subscribes to context changes
  // It returns the current context value for that context
  return useContext(UserContext);
};
