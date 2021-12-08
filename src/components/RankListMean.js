import { useState } from 'react';
import axios from 'axios';

const RankListMean = ({ rankList }) => {
  return (
    <ul className='list-rank'>
      {rankList &&
        rankList.map((item, index) => (
          <>
            {index === 0 ? (
              <li className='list-rank-li-fst' key={item.userId}>
                {index + 1}. {item.userId} otrzymał {item.mean} punktów
              </li>
            ) : index === 1 ? (
              <li className='list-rank-li-snd' key={index.userId}>
                {index + 1}. {item.userId} otrzymał {item.mean} punktów
              </li>
            ) : index === 2 ? (
              <li className='list-rank-li-trd' key={index.userId}>
                {index + 1}. {item.userId} otrzymał {item.mean} punktów
              </li>
            ) : (
              <li key={index.userId} className='list-rank-li'>
                <div>
                  {' '}
                  {index + 1}. {item.userId} otrzymał {item.mean} punktów{' '}
                </div>
              </li>
            )}
          </>
        ))}
    </ul>
  );
};

export default RankListMean;
