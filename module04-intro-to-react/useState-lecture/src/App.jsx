import { useState } from "react";
import Color from "./components/Color";
import "./App.css";

const App = () => {
  const [color, setColor] = useState("Blue");
  // const [name, setName] = useState("Blue");
  // let variableColor = "Blue";
  // let variableName = "Blue"

  const changeColor = () => {
    setColor((prev) => (prev === "Blue" ? "Red" : "Blue"));
    // console.log("Inside function: ", color);
  };

  // console.log("Outside function: ", color);

  return (
    <>
      <h1>{color}</h1>
      {/* <h1>{name}</h1> */}
      <button onClick={changeColor}>Change color</button>
      <Color color={color} setColor={setColor} />
    </>
  );
};

export default App;
