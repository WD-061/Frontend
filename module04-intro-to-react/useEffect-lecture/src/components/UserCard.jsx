const UserCard = ({ user }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700">
      <div className="flex items-center mb-4">
        <div className="bg-blue-500 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-3">
          {user.name.charAt(0)}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-400 mb-1">{user.name}</h3>
          <p className="text-gray-400 text-sm">@{user.username}</p>
        </div>
      </div>
      
      <div className="space-y-3 text-gray-300">
        <p className="flex items-center">
          <span className="w-20 text-gray-400 text-sm">Email:</span>
          <span className="truncate">{user.email}</span>
        </p>
        <p className="flex items-center">
          <span className="w-20 text-gray-400 text-sm">Phone:</span>
          <span>{user.phone}</span>
        </p>
        <p className="flex items-center">
          <span className="w-20 text-gray-400 text-sm">Company:</span>
          <span>{user.company.name}</span>
        </p>
        <p className="flex items-center">
          <span className="w-20 text-gray-400 text-sm">Website:</span>
          <a
            href={`https://${user.website}`}
            className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.website}
          </a>
        </p>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-700">
        <p className="text-sm text-gray-400">
          <span className="font-medium">Address:</span> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
