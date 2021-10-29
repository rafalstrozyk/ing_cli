import { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import CoursesList from '../components/CoursesList';
import { getCourses } from '../redux/actions/classroomActions';

const Home = ({ courses, getCourses }) => {
  // const [courses, setCourses] = useState([]);

  // const getClassRoomListHandler = () => {
  //   axios
  //     .get('http://localhost:9000/classroom/api/courses_list', {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       res.data && res.data.courses && !res.data.error
  //         ? setCourses(res.data.courses)
  //         : console.log('something went wrong');
  //     });
  // };
  useEffect(() => {
    getCourses();
  }, [getCourses]);

  return (
    <div>
      <h1>Home Page </h1>
      <h5>Welcome</h5>
      {/* <button onClick={getClassRoomListHandler}>Get classRoom list</button> */}
      <CoursesList courses={courses} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    courses: state.classroom.courses,
  };
};

export default connect(mapStateToProps, { getCourses })(Home);
