import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { userInfoContext } from '../context';

const WklyHistory = ({ historyData, deleteHistory }) => {

  //console.log("historyData:", historyData)
  // let sortedHistory = historyData?.slice().sort((a,b)=>a.id-b.id)
  // console.log("sortedHistoryData:",sortedHistory)

  const element = <FontAwesomeIcon icon={faTrashCan} />
  const { userInfo, setUserInfo } = useContext(userInfoContext);
  //<FontAwesomeIcon icon="fa-solid fa-trash-can-xmark" />
  let weightLog;
  let startWeight;
  let startDate;

  if (historyData) {
    weightLog = historyData.slice(1)
    startWeight = userInfo[0].weight
    startDate = new Date(userInfo[0].created_at).toLocaleString()
  }
  
  return (
    <div id="historySection">
      {/* <div id="history">Your History</div> */}
      <div id="hisContainer">
        <h2>Your History</h2>
        <h3>You started from {startWeight} lb {'('+ startDate +')'}</h3>
        {weightLog?.map(weightObj => (
          <div id="innerBox" key={weightObj.id}>
            <button id="delete" onClick={() => deleteHistory(weightObj.id)}>{element}</button>
            <div id="weight">Weight: {weightObj.weight}</div>
            <div id="createdAt"style={{ color: 'gray' }}>Date:{new Date(weightObj.created_at).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WklyHistory;
