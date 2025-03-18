const Student = ({ picture, firstName, lastName, age, course, city }) => {
  return (
    <div className="card">
      <img src={picture} alt={firstName + " " + lastName} />
      <div className="cardBody">
        <h2>
          {firstName} {lastName}
        </h2>
        <p>Age: {age}</p>
        <p>Course: {course}</p>
        <p>City: {city}</p>
      </div>
    </div>
  );
};

// Alternative version using studentData prop instead of destructuring:

// const Student = ({ studentData }) => {
//   return (
//     <div className="card">
//       <img
//         src={studentData.picture}
//         alt={studentData.firstName + " " + studentData.lastName}
//       />
//       <div className="card-body">
//         <h2>
//           {studentData.firstName} {studentData.lastName}
//         </h2>
//         <p>Age: {studentData.age}</p>
//         <p>Course: {studentData.course}</p>
//         <p>City: {studentData.city}</p>
//       </div>
//     </div>
//   );
// };

export default Student;
