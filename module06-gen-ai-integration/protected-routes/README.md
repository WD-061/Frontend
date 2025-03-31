# Protected Routes with React Context API

This project demonstrates how to implement protected routes in React using the Context API for authentication state management.

## Step-by-Step Implementation Guide

### 1. Create the Authentication Context

First, create a context to manage authentication state across your application:

```jsx
// src/context/AuthContext.jsx
import { createContext, useState, useEffect, useContext } from "react";

// Create the authentication context
// This creates a new React context that will hold our authentication state
const AuthContext = createContext(null);

// Create a provider component
// This component will wrap our application and make auth state available to all components
export const AuthProvider = ({ children }) => {
  // State to store user information (null means not authenticated)
  const [user, setUser] = useState(null);
  
  // Loading state to handle the initial check for authentication
  // This prevents flashing content while we check if the user is logged in
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on component mount
  // This runs once when the component is first rendered
  useEffect(() => {
    // Try to get the token from localStorage
    const token = localStorage.getItem("token");
    
    if (token) {
      // If a token exists, consider the user authenticated
      // In a real app, you would validate this token with your backend API
      // to ensure it's still valid and hasn't expired
      setUser({ id: "1", name: "Example User", token });
    }
    
    // Set loading to false once we've checked for authentication
    // This allows the rest of the app to render appropriately
    setLoading(false);
  }, []);

  // Login function - called when user submits login form
  const login = (userData) => {
    // In a real app, this would be replaced with an API call
    // that validates credentials and returns a real token
    
    // Generate a fake token for demonstration purposes
    const token = "example-token-" + Math.random().toString(36).substring(2);
    
    // Store token in localStorage so it persists between page refreshes
    localStorage.setItem("token", token);
    
    // Update our state with the user data and token
    setUser({ ...userData, token });
    
    return true; // Return success status
  };

  // Logout function - called when user clicks logout
  const logout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");
    
    // Clear the user data from state, which will make isAuthenticated false
    setUser(null);
  };

  // Create the context value object that will be provided to consumers
  const value = {
    user,                    // The user object (null if not authenticated)
    loading,                 // Whether we're still checking authentication
    isAuthenticated: !!user, // Boolean conversion - true if user exists
    login,                   // Function to handle login
    logout                   // Function to handle logout
  };

  // Provide the authentication context to all child components
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
// This makes it easier for components to access the auth context
export const useAuth = () => {
  // Get the context value
  const context = useContext(AuthContext);
  
  // Make sure the hook is used within an AuthProvider
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  
  return context;
};
```

### 2. Create a Protected Route Component

Next, create a component that will protect routes from unauthorized access:

```jsx
// src/layouts/ProtectedLayout.jsx
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

const ProtectedLayout = () => {
  // Get authentication state and loading status from our auth context
  const { isAuthenticated, loading } = useAuth();

  // If still loading, show a loading indicator
  // This prevents redirecting users who are actually authenticated
  // but we haven't finished checking their status yet
  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  // If not authenticated, redirect to login page
  // The 'replace' prop replaces the current entry in the history stack
  // instead of adding a new one, which provides a better UX when using
  // the back button after logging in
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the child routes using Outlet
  // Outlet is a React Router component that renders the child route's element
  // This allows nested routes to be rendered within their parent layout
  return <Outlet />;
};

export default ProtectedLayout;
```

### 3. Create Login Page

Create a login page to allow users to authenticate:

```jsx
// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Get the login function from our auth context
  const { login } = useAuth();
  
  // Get the navigate function from React Router
  // This allows us to programmatically navigate after login
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();
    
    // Call the login function from our auth context
    // In a real app, you would pass both email and password
    // and validate them on the server
    const success = login({ email });
    
    if (success) {
      // If login was successful, redirect to the dashboard
      // This is a protected route that will now be accessible
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Email input field */}
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          {/* Password input field */}
          <div className="mb-6">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          {/* Submit button */}
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
```

### 4. Create Protected Content (Dashboard)

Create a page that will be protected and only accessible to authenticated users:

```jsx
// src/pages/Dashboard.jsx
const Dashboard = () => {
  // This component will only render if the user is authenticated
  // because it's wrapped in a ProtectedLayout
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Dashboard header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        </div>

        {/* Protected content section */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Protected Route Example</h2>
          <p className="mb-3">
            This dashboard is an example of a protected route that is only accessible to authenticated users.
          </p>
          <p className="mb-3">
            If you try to access this page without being logged in, you will be automatically redirected to the login page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
```

### 5. Create a Main Layout

Create a layout component that will be used for all pages:

```jsx
// src/layouts/MainLayout.jsx
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  // This layout component wraps all pages and provides common UI elements
  return (
    <div className="app-container">
      {/* Navigation bar that appears on all pages */}
      <Navbar />
      
      {/* Main content area where child routes will be rendered */}
      <main className="routes bg-gray-700 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
```

### 6. Update App Component with Routes

Configure your routes to use the authentication context and protected routes:

```jsx
// src/App.jsx
import { Routes, Route } from "react-router";
import Layout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./layouts/ProtectedLayout";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <div className="app">
      {/* Wrap the entire app with AuthProvider to make auth state available everywhere */}
      <AuthProvider>
        {/* Set up the routing structure */}
        <Routes>
          {/* Main layout that will be present on all pages */}
          <Route path="/" element={<Layout />}>
            {/* Public routes that anyone can access */}
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            
            {/* Protected routes that require authentication */}
            {/* The ProtectedRoute component acts as middleware */}
            {/* It will check authentication before rendering its child routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              {/* Add more protected routes here as needed */}
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
```

### 7. Update Navbar to Show Login/Logout

Update your navigation to conditionally show links based on authentication status:

```jsx
// src/components/Navbar.jsx
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  // Get authentication status and logout function from auth context
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        {/* App logo/name with link to home */}
        <Link to="/" className="text-white font-bold">MyApp</Link>
        
        {/* Navigation links */}
        <ul className="flex space-x-6">
          {/* Home link always visible */}
          <li>
            <Link to="/" className="text-white">Home</Link>
          </li>
          
          {/* Conditional rendering based on authentication status */}
          {isAuthenticated ? (
            <>
              {/* Show these links only when user is authenticated */}
              <li>
                <Link to="/dashboard" className="text-white">Dashboard</Link>
              </li>
              <li>
                {/* Logout button that calls the logout function */}
                <button onClick={logout} className="text-white cursor-pointer">Logout</button>
              </li>
            </>
          ) : (
            /* Show login link when user is not authenticated */
            <li>
              <Link to="/login" className="text-white">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
```
