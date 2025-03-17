const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <label htmlFor="">
        Type here:
        <input onChange={handleChange} type="text" />
      </label>
    </div>
  );
};

export default App;
