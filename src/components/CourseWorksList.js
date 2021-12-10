import RankListWorks from './RankListWorks';

const CourseWorksList = ({ worksArray, students }) => {
  return (
    <ul className='users-list'>
      {worksArray && worksArray.length > 0 ? (
        worksArray.map((work) => (
          <li key={work.id}>
            <h4>{work.title}</h4>
            <p className="f-small">{work.updateTime}</p>
            <p style={{marginBottom: '5px'}}>{work.description}</p>
            {work && (
              <RankListWorks
                students={students}
                workTitle={work.title}
                courseId={work.courseId}
                workId={work.id}
              />
            )}
          </li>
        ))
      ) : (
        <div className='dots'></div>
      )}
    </ul>
  );
};

export default CourseWorksList;
