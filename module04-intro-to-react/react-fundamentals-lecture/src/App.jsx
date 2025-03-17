import "./App.css";
import Student from "./components/Student.jsx";

const App = () => {
  // const name = "Jane";
  // const age = 30;
  // const city = "Berlin";

  const students = [
    { id: 1, name: "John", age: 25, city: "Berlin" },
    { id: 2, name: "Jane", age: 30, city: "Hamburg" },
    { id: 3, name: "Lars", age: 15, city: "Munich" },
    { id: 4, name: "Adrian", age: 50, city: "Paris" },
  ];

  return (
    <>
      <h1>Hello class!</h1>
      {/* <Student name={name} age={age} city={city} /> */}
      {students.map(({ name, age, city, id }) => (
        <Student key={id} name={name} age={age} city={city} />
      ))}
    </>
  );
};

export default App;
