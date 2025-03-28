import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Users from "./pages/Users";
import UserProfile from "./pages/UserProfile";
import "./App.css";

/**
 * Main App component that defines the routing structure of the application
 * Uses React Router v7 for client-side routing
 *
 * The routing is organized with:
 * - A parent Layout component that wraps all routes
 * - Child routes that render within the Layout's <Outlet> component
 * - A mix of static routes and dynamic routes with parameters
 */
const App = () => {
  return (
    <div className="app">
      <Routes>
        {/* 
          Parent route with Layout component
          All child routes will be rendered inside the Layout's <Outlet>
        */}
        <Route path="/" element={<Layout />}>
          {/* Index route (homepage) */}
          <Route index element={<Home />} />

          {/* Static routes */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<Users />} />

          {/* Dynamic route with URL parameter */}
          <Route path="/users/:userId" element={<UserProfile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
