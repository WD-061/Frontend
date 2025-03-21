import { useState, useEffect } from "react";

/**
 * JSON Placeholder Fetch Exercise
 * 
 * This component demonstrates how to fetch data from an API using the useEffect hook in React.
 * It retrieves a list of posts from the JSONPlaceholder API and displays them in an unordered list.
 */
const App = () => {
  // State to store the fetched posts
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Flag to prevent state updates if the component unmounts before the fetch completes
    let ignore = false;
    
    // Async function to fetch posts from the JSONPlaceholder API
    const getPosts = async () => {
      try {
        // Make a GET request to the JSONPlaceholder API
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts`
        );

        // Check if the response was successful
        if (!response.ok) throw new Error("Something went wrong");

        // Parse the JSON response
        const data = await response.json();

        // Only update state if the component is still mounted (ignore is false)
        if (!ignore) {
          setPosts(data);
        }
      } catch (error) {
        // Log any errors that occur during the fetch
        console.error(error);
      }
    };
    
    // Call the fetch function when the component mounts
    getPosts();

    // Cleanup function to prevent setting state on unmounted component
    return () => {
      ignore = true;
    };
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div>
      <ul>
        {/* Map through the posts and create a list item for each post */}
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <span>{post.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
