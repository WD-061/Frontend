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

export default Student;
