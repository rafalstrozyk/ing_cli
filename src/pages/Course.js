import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import CourseTeachersList from '../components/CourseTeachersList';
import CourseStudentsList from '../components/CourseStudentsList';
import CourseWorksList from '../components/CourseWorksList';
import { setIsLogin } from '../redux/actions/userActions';
import RankList from '../components/RankList';
import RankListMean from '../components/RankListMean';

const Course = ({ setIsLogin, isLogin }) => {
  const [teachers, setTeachers] = useState(null),
    [students, setStudents] = useState(null),
    [course, setCourse] = useState(null),
    [works, setWorks] = useState(null),
    [fullRank, setFullRank] = useState(null),
    { course_id } = useParams();

  useEffect(() => {
    axios
      .get('http://localhost:9000/classroom/api/course/full_rank', {
        withCredentials: true,
        params: {
          course_id: course_id,
        },
      })
      .then((res) => {
        setFullRank(res.data);
      });
  }, [setFullRank]);
  useEffect(() => {
    axios
      .get('http://localhost:9000/classroom/api/course', {
        withCredentials: true,
        params: {
          course_id: course_id,
        },
      })
      .then((res) => {
        setIsLogin(res.data.isLogin);
        setCourse(res.data.course);
      });
  }, [setCourse, course_id, setIsLogin, isLogin]);

  useEffect(() => {
    axios
      .get('http://localhost:9000/classroom/api/course/students_list', {
        withCredentials: true,
        params: {
          course_id: course_id,
        },
      })
      .then((res) => {
        console.log(res.data);

        setIsLogin(res.data.isLogin);
        setStudents(res.data.students);
      });
  }, [setStudents, course_id, setIsLogin]);
  useEffect(() => {
    axios
      .get('http://localhost:9000/classroom/api/course/teachers_list', {
        withCredentials: true,
        params: {
          course_id: course_id,
        },
      })
      .then((res) => {
        setIsLogin(res.data.isLogin);
        setTeachers(res.data.teachers);
      });
  }, [setTeachers, course_id, setIsLogin]);

  const getWorksList = () => {
    axios
      .get('http://localhost:9000/classroom/api/course/work_list', {
        withCredentials: true,
        params: {
          course_id: course_id,
        },
      })
      .then((res) => {
        setWorks(res.data.courseWork);
      });
  };

  return (
    <div className='grid-site'>
      {course && (
        <>
          <div className='container-center'>
            <h1>{course.name}</h1>
          </div>

          <div className='container'>
            <div>
              <p>sekcja: {course.section}</p>
              <p>deskrypcja: {course.descriptionHeading}</p>
              <p>pokój: {course.room}</p>
              <p>mail grupowy: {course.courseGroupEmail}</p>
              <p>mail grupowy nauczycieli: {course.teacherGroupEmail}</p>
              <button onClick={getWorksList}>Course works</button>
              <h3>Nauczyciele</h3>
              <CourseTeachersList teachersArray={teachers} />
              <h3>Uczniowie</h3>
              <CourseStudentsList studentsArray={students} />
              <h3>Zadania</h3>
              <CourseWorksList worksArray={works} />
            </div>
            <div>
              <h3 className='ranking-header'>Najlepsi Uczniowie</h3>
              <RankListMean rankList={fullRank} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.user.isLogin,
  };
};

export default connect(mapStateToProps, { setIsLogin })(Course);
