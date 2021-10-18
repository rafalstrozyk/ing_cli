const CourseStudentsList = ({ studentsArray }) => {
  return (
    <ul>
      {studentsArray && studentsArray.length > 0 ? (
        studentsArray.map((student) => (
          <li key={student.profile.id}>
            <p>Imie: {student.profile.name.givenName}</p>
            <p>Nazwisko: {student.profile.name.familyName}</p>
            <p>E-mail: {student.profile.emailAddress}</p>
            <p>userId: {student.userId}</p>
          </li>
        ))
      ) : (
        <p>Brak danych o uczniach</p>
      )}
    </ul>
  );
};

export default CourseStudentsList;
