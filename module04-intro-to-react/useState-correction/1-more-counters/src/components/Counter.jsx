// Counter component to display and modify a counter value
const Counter = ({ counter, setCounter }) => {
  // Function to increment the counter
  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <div>
      {/* Button to decrement the counter */}
      <button onClick={decrement}>-</button>
      {/* Display the current counter value */}
      <span>{counter}</span>
      {/* Button to increment the counter */}
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;

// ----------------------------------
// Alternative using a unified state
// ----------------------------------

// // Counter component to display and modify a counter value using a unified state
// const Counter = ({ count, id, setCounters }) => {
//   return (
//     <div>
//       <h2>Counter: {count}</h2>
//       {/* Button to increment the counter value in the unified state */}
//       <button
//         onClick={() =>
//           setCounters((prev) =>
//             prev.map((c) => (c.id === id ? { ...c, value: c.value + 1 } : c))
//           )
//         }
//       >
//         Increment
//       </button>
//       {/* Button to decrement the counter value in the unified state */}
//       <button
//         onClick={() =>
//           setCounters((prev) =>
//             prev.map((c) => (c.id === id ? { ...c, value: c.value - 1 } : c))
//           )
//         }
//       >
//         Decrement
//       </button>
//     </div>
//   );
// };

// export default Counter;
