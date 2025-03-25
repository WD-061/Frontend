import { useParams, Link } from "react-router";
import { useUser } from "../hooks/useUserData";

/**
 * UserProfile component displays detailed information about a specific user
 * Uses React Router's useParams hook to access the userId from the URL
 * Fetches user data using the custom useUser hook
 * Displays user information in a card layout with proper styling for dark mode
 */
const UserProfile = () => {
  // Extract userId from URL parameters
  const { userId } = useParams();
  console.log({ userId });
  
  // Fetch user data based on the userId
  const user = useUser(userId);

  // Show loading state while user data is being fetched
  if (!user) return <div className="p-4 text-white">Loading user data...</div>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      {/* Navigation link back to users list */}
      <Link
        to="/users"
        className="text-blue-300 hover:text-blue-100 mb-4 inline-block"
      >
        ← Back to Users
      </Link>

      {/* User profile card with dark theme styling */}
      <div className="bg-gray-800 shadow-md rounded-lg p-6 mt-4 text-gray-200">
        <h1 className="text-2xl font-bold mb-2 text-white">{user.name}</h1>
        
        {/* Two-column layout for user information (responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Contact information section */}
          <div>
            <h2 className="text-lg font-semibold mb-2 text-white">Contact Information</h2>
            <p>
              <span className="font-medium text-gray-300">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-medium text-gray-300">Phone:</span> {user.phone}
            </p>
            <p>
              <span className="font-medium text-gray-300">Website:</span> {user.website}
            </p>
          </div>

          {/* Company information section */}
          <div>
            <h2 className="text-lg font-semibold mb-2 text-white">Company</h2>
            <p>
              <span className="font-medium text-gray-300">Name:</span> {user.company.name}
            </p>
            <p>
              <span className="font-medium text-gray-300">Business:</span> {user.company.bs}
            </p>
            <p>
              <span className="font-medium text-gray-300">Catchphrase:</span> "
              {user.company.catchPhrase}"
            </p>
          </div>
        </div>

        {/* Address section */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2 text-white">Address</h2>
          <p>
            {user.address.street}, {user.address.suite}
          </p>
          <p>
            {user.address.city}, {user.address.zipcode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
