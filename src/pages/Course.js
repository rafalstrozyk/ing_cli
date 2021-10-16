import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CourseTeachersList from '../components/CourseTeachersList';
import CourseStudentsList from '../components/CourseStudentsList';

const Course = () => {
  const [teachers, setTeachers] = useState(null);
  const [students, setStudents] = useState(null);
  const [course, setCourse] = useState(null);
  const { course_id } = useParams();
  useEffect(() => {
    axios
      .get('http://localhost:9000/classroom/api/course', {
        withCredentials: true,
        params: {
          course_id: course_id,
        },
        data: {
          course_id: course_id,
        },
      })
      .then((res) => {
        setCourse(res.data);
      });
  }, [setCourse, course_id]);

  const getWorksList = () => {
    axios
      .get('http://localhost:9000/classroom/api/course/work_list', {
        withCredentials: true,
        params: {
          course_id: course_id,
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  const getTeachersListHandler = () => {
    axios
      .get('http://localhost:9000/classroom/api/course/teachers_list', {
        withCredentials: true,
        params: {
          course_id: course_id,
        },
      })
      .then((res) => {
        setTeachers(res.data.teachers);
      });
  };
  const getStudentsListHandler = () => {
    axios
      .get('http://localhost:9000/classroom/api/course/students_list', {
        withCredentials: true,
        params: {
          course_id: course_id,
        },
      })
      .then((res) => {
        setStudents(res.data.students);
      });
  };

  return (
    <div>
      {course && (
        <>
          <h1>{course.name}</h1>
          <p>sekcja: {course.section}</p>
          <p>deskrypcja: {course.descriptionHeading}</p>
          <p>pokój: {course.room}</p>
          <p>mail grópowy: {course.courseGroupEmail}</p>
          <p>mail grópowy nauczycieli: {course.teacherGroupEmail}</p>
          <button onClick={getTeachersListHandler}>Teachers list</button>
          <button onClick={getStudentsListHandler}>Students list</button>
          <button onClick={getWorksList}>Course works</button>
          <h3>Nauczyciele</h3>
          <CourseTeachersList teachersArray={teachers} />
          <h3>Uczniowie</h3>
          <CourseStudentsList studentsArray={students} />
        </>
      )}
    </div>
  );
};

export default Course;
