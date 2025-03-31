const Dashboard = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        </div>

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
