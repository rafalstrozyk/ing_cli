const RankListMean = ({ rankList }) => {
  return (
    <ul className='list-rank'>
      {rankList ? (
        rankList.map((item, index) => (
          <>
            {index === 0 ? (
              <li className='list-rank-li-fst' key={item.userId}>
                {index + 1}. {item.userData.name.fullName} :{' '}
                {parseFloat(item.mean).toFixed(2)} punkty
              </li>
            ) : index === 1 ? (
              <li className='list-rank-li-snd' key={item.userId}>
                {index + 1}.{item.userData.name.fullName} :{' '}
                {parseFloat(item.mean).toFixed(2)} punkty
              </li>
            ) : index === 2 ? (
              <li className='list-rank-li-trd' key={item.userId}>
                {index + 1}. {item.userData.name.fullName} :{' '}
                {parseFloat(item.mean).toFixed(2)} punkty
              </li>
            ) : (
              <li key={index.userId} className='list-rank-li'>
                <div>
                  {' '}
                  {index + 1}. {item.userData.name.fullName} :{' '}
                  {parseFloat(item.mean).toFixed(2)} punkty{' '}
                </div>
              </li>
            )}
          </>
        ))
      ) : (
        <div className='dots'></div>
      )}
    </ul>
  );
};

export default RankListMean;
