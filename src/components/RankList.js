import { useState } from 'react';
import axios from 'axios';

const RankList = ({ courseId, workId, workTitle }) => {
  const [showRank, setShowRank] = useState(false),
    [rank, setRank] = useState([]);
  function handleGetSubmisionList() {
    axios
      .get('http://localhost:9000/classroom/api/course/work_list_submissions', {
        withCredentials: true,
        params: {
          course_id: courseId,
          course_work_id: workId,
        },
      })
      .then((res) => {
        console.log(workTitle);
        setShowRank((state) => !state);
        setRank(res.data.rank);
      });
  }
  return (
    <>
      <button onClick={handleGetSubmisionList}>Ranking dla {workTitle}</button>
      {showRank && (
        <ul className='list-rank'>
          {rank &&
            rank.map((item, index) => (
              <>
                {index === 0 ? (
                  <li className='list-rank-li-fst' key={index}>
                    {index + 1}. {item.userId} otrzymał {item.assignedGrade}{' '}
                    punktów
                  </li>
                ) : index === 1 ? (
                  <li className='list-rank-li-snd' key={index}>
                    {index + 1}. {item.userId} otrzymał {item.assignedGrade}{' '}
                    punktów
                  </li>
                ) : index === 2 ? (
                  <li className='list-rank-li-trd' key={index}>
                    {index + 1}. {item.userId} otrzymał {item.assignedGrade}{' '}
                    punktów
                  </li>
                ) : (
                  <li key={index} className='list-rank-li'>
                    {index + 1}. {item.userId} otrzymał {item.assignedGrade}{' '}
                    punktów{' '}
                  </li>
                )}
              </>
            ))}
        </ul>
      )}
    </>
  );
};

export default RankList;

// = ranks.map((rank,index) => {
//     if (index===0){<li className='1st'>{rank}</li>}
//     else if (index===1){<li className='2nd'>{rank}</li>}
//     else if (index===2){<li className='3rd'>{rank}</li>}
//     else {<li>{rank}</li>}

// });
