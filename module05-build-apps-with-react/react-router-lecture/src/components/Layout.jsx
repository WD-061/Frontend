import { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";

/**
 * Layout component serves as the main layout wrapper for the application
 * It provides a consistent structure across all pages with:
 * - A navigation bar at the top
 * - A main content area where child routes are rendered
 * - Consistent styling with a dark background
 * 
 * It also manages authentication state and passes it down to child routes
 * via React Router's Outlet context
 */
const Layout = () => {
  // signedIn state is used in the Navbar, and by protected pages
  const [signedIn, setSignedIn] = useState(false);
  
  return (
    <div className="app-container">
      {/* Navigation bar component, displayed on all pages */}
      <Navbar signedIn={signedIn} setSignedIn={setSignedIn} />
      
      {/* 
        Main content area with dark background
        All child routes from React Router will render inside this element
        We pass the signedIn state and setter to child routes via Outlet context
      */}
      <main className="routes bg-gray-700 min-h-screen">
        {/* Child routes will render here with access to signedIn context */}
        <Outlet context={{ signedIn, setSignedIn }} />
      </main>
    </div>
  );
};

export default Layout;
