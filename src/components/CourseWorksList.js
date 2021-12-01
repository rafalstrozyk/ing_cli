import { useState } from 'react';
import axios from 'axios';
import RankList from './RankList';

const CourseWorksList = ({ worksArray }) => {
  // const [submisionWorksList, setSubmisionWorksList] = useState(null);
  // const [showRank, setShowRank] = useState(false)
  // function handleGetSubmisionList(course_id, work_id) {
  //   axios
  //     .get('http://localhost:9000/classroom/api/course/work_list_submissions', {
  //       withCredentials: true,
  //       params: {
  //         course_id: course_id,
  //         course_work_id: work_id,
  //       },
  //     })
  //     .then((res) => {

  //     });
  // }
  return (
    <ul>
      {worksArray && worksArray.length > 0 ? (
        worksArray.map((work) => (
          <li key={work.id}>
            <p>{work.title}</p>
            <p>{work.updateTime}</p>
            <p>{work.description}</p>
            {work && (
              <RankList
                workTitle={work.title}
                courseId={work.courseId}
                workId={work.id}
              />
            )}
          </li>
        ))
      ) : (
        <p>Brak danych o zadaniach</p>
      )}
    </ul>
  );
};

export default CourseWorksList;
