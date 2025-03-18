import Student from "./components/Student";

const studentData = {
  firstName: "Testy",
  lastName: "McTest",
  age: 42,
  course: "Web Development",
  city: "Berlin",
  picture: "https://randomuser.me/api/portraits/men/1.jpg",
};

const App = () => {
  return (
    <div>
      <Student {...studentData} />
      {/* Alternative version using studentData prop instead of destructuring: */}
      {/* <Student studentData={studentData} /> */}
    </div>
  );
};

export default App;
