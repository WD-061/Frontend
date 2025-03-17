import Address from "./Address.jsx";

const Student = (props) => {
  // const name = "John";
  // const age = 20;

  console.log(props);

  return (
    <div>
      <h2>Student</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <Address city={props.city} />
    </div>
  );
};

export default Student;
