import CoursesListCourse from './CoursesListCourse';

const CoursesList = ({ courses }) => {
  return (
    <div>
      <ul className='users-list'>
        {courses &&
          courses.length > 0 &&
          courses.map((course) => (
            <CoursesListCourse key={course.id} course={course} />
          ))}
      </ul>
    </div>
  );
};

export default CoursesList;
