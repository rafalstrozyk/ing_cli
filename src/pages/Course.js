import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import CourseTeachersList from '../components/CourseTeachersList';
import CourseStudentsList from '../components/CourseStudentsList';
import CourseWorksList from '../components/CourseWorksList';
import { setIsLogin } from '../redux/actions/userActions';
import RankListMean from '../components/RankListMean';

const Course = ({ setIsLogin, isLogin }) => {
  const [teachers, setTeachers] = useState(null),
    [students, setStudents] = useState(null),
    [course, setCourse] = useState(null),
    [works, setWorks] = useState(null),
    [fullRank, setFullRank] = useState(null),
    [showWorks, setShowWorks] = useState(false),
    { course_id } = useParams();

  useEffect(() => {
    if (students) {
      axios
        .get('http://localhost:9000/classroom/api/course/full_rank', {
          withCredentials: true,
          params: {
            course_id: course_id,
          },
        })
        .then((res) => {
          const arr = [];
          res.data.forEach((item) => {
            item.userData =
              students[
                students.findIndex((x) => x.userId === item.userId)
              ].profile;
            arr.push(item);
          });
          setFullRank(arr);
        });
    }
  }, [setFullRank, course_id, students]);
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
    setShowWorks(true);
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
      {course ? (
        <>
          <div className='m-t-1'>
            <h1>{course.name}</h1>
          </div>

          <div className='container'>
            <div>
              <div className='m-b-1'>
                <p>sekcja: {course.section}</p>
                <p>deskrypcja: {course.descriptionHeading}</p>
                <p>pokój: {course.room}</p>
              </div>
              <div className='m-b-1'>
                <h3>Nauczyciele</h3>
                <CourseTeachersList teachersArray={teachers} />
              </div>
              <div className='m-b-1'>
                <h3>Uczniowie</h3>
                <CourseStudentsList studentsArray={students} />
              </div>
              <div className='m-b-1'>
                {showWorks ? (
                  <>
                    <h3>Zadania</h3>
                    <CourseWorksList worksArray={works} students={students} />
                  </>
                ) : (
                  <button onClick={getWorksList}>Wyświetl Zadania</button>
                )}
              </div>
            </div>
            <div>
              <h3 className='ranking-header'>Najlepsi Uczniowie</h3>
              {students ? (
                <RankListMean rankList={fullRank} students={students} />
              ) : (
                <p>... loading</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className='dots'></div>
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
