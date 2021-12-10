const CourseTeachersList = ({ teachersArray }) => {
  return (
    <ul className='users-list'>
      {teachersArray && teachersArray.length > 0 ? (
        teachersArray.map((teacher) => (
          <li key={teacher.profile.id}>
            <p>Imie: {teacher.profile.name.givenName}</p>
            <p>Nazwisko: {teacher.profile.name.familyName}</p>
          </li>
        ))
      ) : (
        <div className='dots'></div>
      )}
    </ul>
  );
};

export default CourseTeachersList;
