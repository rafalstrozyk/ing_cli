
const RankList = ({rank=[1,2,3,4,5,6,7]}) => {
    return (<>
    <ul>
    {rank.map((item, index) =>(
       <>
       {index === 0 ? <li class="fst">{index+1}. first {item}</li> : index === 1 ? <li class="snd">{index+1}. second {item}</li> : index === 2 ? <li class="trd">{index+1}. third {item}</li> : <li>{index+1}. {item}</li>}
       </> 
    ))}
    </ul>
    {console.log(rank)}
    </>)
}

export default RankList;

// = ranks.map((rank,index) => {
//     if (index===0){<li className='1st'>{rank}</li>}
//     else if (index===1){<li className='2nd'>{rank}</li>}
//     else if (index===2){<li className='3rd'>{rank}</li>}
//     else {<li>{rank}</li>}
    
// });