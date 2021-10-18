import { useState } from 'react';
import axios from 'axios';

const CourseWorksList = ({ worksArray }) => {
  const [submisionWorksList, setSubmisionWorksList] = useState(null);
  function handleGetSubmisionList(course_id, work_id) {
    console.log('lol');
    axios
      .get('http://localhost:9000/classroom/api/course/work_list_submissions', {
        withCredentials: true,
        params: {
          course_id: course_id,
          course_work_id: work_id,
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  }
  return (
    <ul>
      {worksArray && worksArray.length > 0 ? (
        worksArray.map((work) => (
          <li key={work.id}>
            <p>{work.title}</p>
            <p>{work.updateTime}</p>
            <p>{work.description}</p>
            <button
              onClick={() => handleGetSubmisionList(work.courseId, work.id)}
            >
              Zgłoszenia uczniów{' '}
            </button>
          </li>
        ))
      ) : (
        <p>Brak danych o zadaniach</p>
      )}
    </ul>
  );
};

export default CourseWorksList;
