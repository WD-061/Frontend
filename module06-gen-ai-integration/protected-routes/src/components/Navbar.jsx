import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl hover:text-gray-300 transition duration-300">
          MyApp
        </Link>
        
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
          
          {isAuthenticated ? (
            <>
              <li>
                <Link
                  to="/dashboard"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <button
                  onClick={logout}
                  className="text-white hover:text-gray-300 transition duration-300 cursor-pointer"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link
                to="/login"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
