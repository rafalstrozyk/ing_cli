import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Course = () => {
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
        console.log(res.data);
      });
  });

  const getTeachersListHandler = () => {
    axios
      .get('http://localhost:9000/classroom/api/course/teachers_list', {
        withCredentials: true,
        params: {
          course_id: course_id,
        },
      })
      .then((res) => {
        console.log(res.data);
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
        console.log(res.data);
      });
  };

  return (
    <div>
      <h1>lol</h1>
      <button onClick={getTeachersListHandler}>Teachers list</button>
      <button onClick={getStudentsListHandler}>Students list</button>
    </div>
  );
};

export default Course;
