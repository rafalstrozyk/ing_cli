const CourseTeachersList = ({ teachersArray }) => {
  return (
    <ul>
      {teachersArray && teachersArray.length > 0 ? (
        teachersArray.map((teacher) => (
          <li key={teacher.profile.Id}>
            <p>Imie: {teacher.profile.name.givenName}</p>
            <p>Nazwisko: {teacher.profile.name.familyName}</p>
            <p>userId: {teacher.userId}</p>
          </li>
        ))
      ) : (
        <p>Brak danych o nauczycielach</p>
      )}
    </ul>
  );
};

export default CourseTeachersList;
