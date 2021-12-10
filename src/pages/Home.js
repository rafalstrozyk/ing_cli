import { useEffect } from 'react';
import { connect } from 'react-redux';
import CoursesList from '../components/CoursesList';
import { getCourses } from '../redux/actions/classroomActions';

const Home = ({ courses, getCourses }) => {
  useEffect(() => {
    getCourses();
  }, [getCourses]);

  return (
    <div className='grid-site'>
      <h1>WWSSE Kursy </h1>
      {courses.length > 0 ? (
        <CoursesList courses={courses} />
      ) : (
        <div className='dots'></div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    courses: state.classroom.courses,
  };
};

export default connect(mapStateToProps, { getCourses })(Home);
