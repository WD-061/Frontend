import Grade from './Grade';
const Student = ({
    picture,
    firstName,
    lastName,
    age,
    course,
    city,
    graduate,
    gpa,
}) => {
    return (
        <div className='card'>
            <img
                src={picture}
                // alt={`${studentData.firstName} ${studentData.lastName}`}
                alt={firstName + ' ' + lastName}
            />
            <div className='card-body'>
                <h2>
                    {firstName} {lastName}
                </h2>
                <p>Age: {age}</p>
                <p>Course: {course}</p>
                <p>City: {city}</p>
                <p>Status: {graduate ? 'Alumni' : 'Student'}</p>
                <Grade gpa={gpa} />
            </div>
        </div>
    );
};

export default Student;
