import Counter from "./components/Counter.jsx";

import { useState } from "react";

// Main component of the application
const App = () => {
  // State variables for each counter
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  return (
    <div>
      {/* Render three Counter components, each with its own state */}
      <Counter counter={counter1} setCounter={setCounter1} />
      <Counter counter={counter2} setCounter={setCounter2} />
      <Counter counter={counter3} setCounter={setCounter3} />
      {/* Buttons to increase or decrease all counters simultaneously (currently commented out) */}
      {/* <button
        onClick={() => {
          setCounter1((prev) => prev - 1);
          setCounter2((prev) => prev - 1);
          setCounter3((prev) => prev - 1);
        }}
      >
        Decrease All
      </button>
      <button
        onClick={() => {
          setCounter1((prev) => prev + 1);
          setCounter2((prev) => prev + 1);
          setCounter3((prev) => prev + 1);
        }}
      >
        Increase All
      </button> */}
    </div>
  );
};

export default App;

// ----------------------------------
// Alternative using a unified state
// ----------------------------------

// import Counter from "./components/Counter.jsx";

// import { useState } from "react";

// // Main component of the application using a unified state
// const App = () => {
//   // State for each counter stored in an array of objects
//   const [counters, setCounters] = useState([
//     {
//       id: 1,
//       value: 0,
//     },
//     {
//       id: 2,
//       value: 0,
//     },
//     {
//       id: 3,
//       value: 0,
//     },
//   ]);

//   return (
//     <div>
//       <h1>Three Counters</h1>
//       {/* Map over the counters array to render Counter components */}
//       {counters.map((c) => (
//         <Counter
//           key={c.id}
//           id={c.id}
//           count={c.value}
//           setCounters={setCounters}
//         />
//       ))}
//     </div>
//   );
// };

// export default App;
