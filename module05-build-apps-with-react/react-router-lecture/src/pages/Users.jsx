import { Link } from "react-router";
import { useOutletContext } from "react-router";
import { useUsers } from "../hooks/useUserData";

/**
 * Users component displays a grid of user cards
 * Each card shows basic user information and links to their detailed profile
 * Uses the custom useUsers hook to fetch the list of users
 * Styled with Tailwind CSS for dark mode compatibility
 * 
 * Now uses useOutletContext to check if the user is signed in
 * and conditionally renders content based on authentication status
 */
const Users = () => {
  // Fetch all users data
  const users = useUsers();
  
  // Access the signedIn state from the parent Layout component
  const { signedIn } = useOutletContext();

  // If not signed in, show a message asking the user to sign in
  if (!signedIn) {
    return (
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold mb-4 text-white">Users</h1>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-xl text-white font-semibold mb-4">Authentication Required</h2>
          <p className="text-gray-300 mb-4">
            Please sign in to view the list of users.
          </p>
          <p className="text-gray-400 text-sm">
            This is a demonstration of using useOutletContext for authentication checks.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Users</h1>
      
      {/* Responsive grid layout for user cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-gray-800 border border-gray-600 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* User card content */}
            <h2 className="text-xl font-semibold text-white">{user.name}</h2>
            <p className="text-gray-300">{user.email}</p>
            <p className="text-gray-300 mb-4">{user.company.name}</p>
            
            {/* Link to individual user profile */}
            <Link
              to={`/users/${user.id}`}
              className="text-blue-300 hover:text-blue-100 font-medium"
            >
              View Profile →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
