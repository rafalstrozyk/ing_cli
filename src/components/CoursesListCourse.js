import { useHistory } from 'react-router-dom';

const CoursesListCourse = ({ course }) => {
  const history = useHistory();
  const moreInfoHandler = () => {
    history.push(`/courses/${course.id}`);
  };
  return (
    <li>
      <h4>{course.name}</h4>
      <p style={{marginBottom: '6px'}}>Pokój: {course.room}</p>
      <button onClick={moreInfoHandler}>More info</button>
    </li>
  );
};

export default CoursesListCourse;
