import { useHistory } from "react-router-dom";

const CoursesListCourse = ({course}) => {
    const history =  useHistory()
    const moreInfoHandler = () => {
        history.push(`/courses/${course.id}`)
    }
    return (
        <li>
          <p>{course.name}</p>
          <p>Pokój: {course.room}</p>
          <p>Pokój: {course.room}</p>
          <p>Mail: {course.courseGroupEmail}</p>
          <p>Mail Nauczyciela: {course.teacherGroupEmail}</p>
          <button onClick={moreInfoHandler}>More info</button>
          
        </li>
      );
}

export default CoursesListCourse;
