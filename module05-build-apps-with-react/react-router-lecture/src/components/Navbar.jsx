import { Link } from "react-router";

/**
 * Navbar component provides navigation links for the application
 * It appears at the top of every page through the Layout component
 * Uses React Router's Link component for client-side navigation without page reloads
 */
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* App logo/name */}
        <div className="text-white font-bold text-xl">MyApp</div>
        
        {/* Navigation links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Users
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
