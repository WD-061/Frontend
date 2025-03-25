import { Outlet } from "react-router";
import Navbar from "./Navbar";

/**
 * Layout component serves as the main layout wrapper for the application
 * It provides a consistent structure across all pages with:
 * - A navigation bar at the top
 * - A main content area where child routes are rendered
 * - Consistent styling with a dark background
 */
const Layout = () => {
  return (
    <div className="app-container">
      {/* Navigation bar component, displayed on all pages */}
      <Navbar />
      
      {/* 
        Main content area with dark background
        All child routes from React Router will render inside this element
      */}
      <main className="routes bg-gray-700 min-h-screen">
        {/* Child routes will render here */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
