function StudentProfile({ name, age, course, college }) {
  return (
    <div>
      <h2>Student Information</h2>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Age:</strong> {age}
      </p>

      <p>
        <strong>Course:</strong> {course}
      </p>

      <p>
        <strong>College:</strong> {college}
      </p>
    </div>
  );
}

export default StudentProfile;