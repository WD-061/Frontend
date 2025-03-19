const Color = ({ color, setColor }) => {
  const changeColor = () => {
    setColor((prev) => (prev === "Blue" ? "Red" : "Blue"));
  };

  return (
    <>
      <h1>{color}</h1>
      <button onClick={changeColor}>Change color</button>
    </>
  );
};

export default Color;
