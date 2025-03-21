// ==================================================================
// ========== ALTERNATIVE USEEFFECT EXAMPLE: DATA FETCHING ==========
// ==================================================================

import UserCard from "./components/UserCard";
import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    /**
     * Fetches user data from the JSONPlaceholder API
     *
     * This function manages three state variables throughout the fetch process:
     * - loading: Indicates whether a fetch operation is in progress
     * - error: Stores any error messages that occur during fetching
     * - data: Stores the successfully fetched data
     */
    async function fetchData() {
      try {
        // Set loading to true to show loading indicator
        // This is necessary to handle refetching cases where loading might have been false
        setLoading(true);

        // Fetch data from the JSONPlaceholder API
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        // Check if the response is valid
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Parse the JSON response
        const result = await response.json();

        // Update the data state with fetched results
        setData(result);

        // Clear any previous errors
        // This is necessary in case there was an error from a previous fetch attempt
        // and we're now successfully fetching data
        setError(null);
      } catch (error) {
        // Handle any errors that occurred during fetching
        setError("Failed to fetch data: " + error.message);

        // Reset data to null when there's an error
        // This ensures we don't display old/stale data alongside an error message
        setData(null);
      } finally {
        // Set loading to false regardless of success or failure
        // This is always necessary to hide the loading indicator
        setLoading(false);
      }
    }

    // Call the fetchData function when the component mounts
    fetchData();

    // The empty dependency array means this effect runs once on mount
    // and doesn't re-run on state or prop changes
  }, []);

  if (loading)
    return <div className="text-center p-4 text-gray-600">Loading...</div>;
  if (error)
    return <div className="p-4 text-red-500 bg-red-50 rounded-md">{error}</div>;
  if (!data)
    return (
      <div className="p-4 text-gray-500 bg-gray-50 rounded-md">
        No data available
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">
          User Directory
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

// ===========================================================================
// ========== ALTERNATIVE USEEFFECT EXAMPLE: DOCUMENT TITLE UPDATER ==========
// ===========================================================================

// import { useState, useEffect } from "react";
// import "./App.css";

// const App = () => {
//   const [count, setCount] = useState(0);

//   // This effect runs when the component mounts and whenever count changes
//   useEffect(() => {
//     // Update the document title using the browser API (Oh no, it's DOM :<)
//     document.title = `You clicked ${count} times`;

//     // No cleanup needed for this effect
//   }, [count]); // Only re-run if count changes

//   return (
//     <div className="min-h-screen bg-gray-900 flex items-center justify-center">
//       <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center max-w-md w-full">
//         <h2 className="text-2xl font-bold text-blue-400 mb-6">Document Title Updater</h2>
//         <p className="text-white text-xl mb-6">You clicked <span className="text-yellow-400 font-bold">{count}</span> times</p>
//         <button
//           onClick={() => setCount(count + 1)}
//           className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium"
//         >
//           Click me
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;

// ===========================================================================
// ========== ALTERNATIVE USEEFFECT EXAMPLE: TIMER WITH CLEANUP ==============
// ===========================================================================

// import { useState, useEffect } from "react";
// import "./App.css";

// const App = () => {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     // Set up the interval
//     const interval = setInterval(() => {
//       setSeconds((prevSeconds) => prevSeconds + 1);
//     }, 1000);

//     // This cleanup function runs when:
//     // 1. The component unmounts
//     // 2. Before the effect runs again (if dependencies change)

//     // To see the difference comment out only the following return function and refresh the page -> The timer runs twice now (adds 2 seconds)!
//     return () => {
//       clearInterval(interval); // Clean up the interval
//       console.log("Timer cleaned up!");
//     };
//   }, []); // Empty array means run once on mount

//   return (
//     <div className="min-h-screen bg-gray-900 flex items-center justify-center">
//       <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center max-w-md w-full">
//         <h2 className="text-2xl font-bold text-blue-400 mb-6">Timer Example</h2>
//         <div className="text-5xl font-bold text-white mb-4">
//           <span className="bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
//             {seconds}
//           </span>
//         </div>
//         <p className="text-gray-400">seconds elapsed</p>
//       </div>
//     </div>
//   );
// };

// export default App;
