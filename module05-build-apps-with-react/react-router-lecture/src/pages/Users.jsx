import { Link } from "react-router";
import { useUsers } from "../hooks/useUserData";

/**
 * Users component displays a grid of user cards
 * Each card shows basic user information and links to their detailed profile
 * Uses the custom useUsers hook to fetch the list of users
 * Styled with Tailwind CSS for dark mode compatibility
 */
const Users = () => {
  // Fetch all users data
  const users = useUsers();

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
