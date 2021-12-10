const CourseStudentsList = ({ studentsArray }) => {
  return (
    <ul className='users-list'>
      {studentsArray && studentsArray.length > 0 ? (
        studentsArray.map((student) => (
          <li key={student.profile.id}>
            <p>Imie: {student.profile.name.givenName}</p>
            <p>Nazwisko: {student.profile.name.familyName}</p>
            <p>E-mail: {student.profile.emailAddress}</p>
          </li>
        ))
      ) : (
        <div className='dots'></div>
      )}
    </ul>
  );
};

export default CourseStudentsList;
