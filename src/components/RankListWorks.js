import { useState, useEffect } from 'react';
import axios from 'axios';

const RankListWorks = ({ courseId, workId, workTitle, students }) => {
  const [showRank, setShowRank] = useState(false),
    [rank, setRank] = useState([]),
    [loading, setLoading] = useState(true);

  useEffect(() => {
    if (showRank) {
      setLoading(true);
      axios
        .get(
          'http://localhost:9000/classroom/api/course/work_list_submissions',
          {
            withCredentials: true,
            params: {
              course_id: courseId,
              course_work_id: workId,
            },
          }
        )
        .then((res) => {
          const arr = [];
          res.data &&
            res.data.rank.forEach((item) => {
              item.userData =
                students[
                  students.findIndex((x) => x.userId === item.userId)
                ].profile;
              arr.push(item);
            });
          setRank(arr);
          setLoading(false);
        });
    }
  }, [showRank, setRank, courseId, workId, students]);

  function handleGetSubmisionList() {
    setShowRank((state) => !state);
  }
  return (
    <>
      <button onClick={handleGetSubmisionList}>Wyświetl ranking</button>
      {showRank &&
        (loading ? (
          <div className='dots'></div>
        ) : (
          <ul className='list-rank'>
            {rank &&
              (rank.length > 0 ? (
                rank.map((item, index) => (
                  <>
                    {index === 0 ? (
                      <li className='list-rank-li-fst' key={item.userId}>
                        {index + 1}. {item.userData.name.fullName} :{' '}
                        {parseFloat(item.assignedGrade).toFixed(2)} punkty
                      </li>
                    ) : index === 1 ? (
                      <li className='list-rank-li-snd' key={item.userId}>
                        {index + 1}. {item.userData.name.fullName} :{' '}
                        {parseFloat(item.assignedGrade).toFixed(2)} punkty
                      </li>
                    ) : index === 2 ? (
                      <li className='list-rank-li-trd' key={item.userId}>
                        {index + 1}. {item.userData.name.fullName} :{' '}
                        {parseFloat(item.assignedGrade).toFixed(2)} punkty
                      </li>
                    ) : (
                      <li key={item.userId} className='list-rank-li'>
                        <div>
                          {index + 1}. {item.userData.name.fullName} :{' '}
                          {parseFloat(item.assignedGrade).toFixed(2)} punkty
                        </div>
                      </li>
                    )}
                  </>
                ))
              ) : (
                <p>Brak ocen</p>
              ))}
          </ul>
        ))}
    </>
  );
};

export default RankListWorks;
