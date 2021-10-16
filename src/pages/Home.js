import { useState } from 'react';
import axios from 'axios';
import CoursesList from '../components/CoursesList';

const Home = () => {
  const [courses, setCourses] = useState([]);

  const getClassRoomListHandler = () => {
    axios
      .get('http://localhost:9000/classroom/api/courses_list', {
        withCredentials: true,
      })
      .then((res) => {
        res.data && res.data.courses && !res.data.error
          ? setCourses(res.data.courses)
          : console.log('something went wrong');
      });
  };

  return (
    <div>
      <h1>Home Page </h1>
      <h5>Welcome</h5>
      <button onClick={getClassRoomListHandler}>Get classRoom list</button>
      <CoursesList courses={courses} />
    </div>
  );
};

export default Home;
