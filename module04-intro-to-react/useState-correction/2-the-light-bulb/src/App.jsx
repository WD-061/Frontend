import { useState } from "react";
import LightBulb from "./components/LightBulb";
import "./style.css";

// Main component of the application
const App = () => {
  // State variable to track the light bulb's state (on/off)
  const [lightOn, setLightOn] = useState(false);

  // Function to toggle the light bulb's state
  const toggleLight = () => {
    setLightOn((prev) => !prev);
  };

  return (
    <>
      {/* Button to toggle the light bulb's state */}
      <button onClick={toggleLight}>Switch</button>
      {/* Render the LightBulb component with the current state */}
      <LightBulb lightOn={lightOn} />
    </>
  );
};

export default App;
