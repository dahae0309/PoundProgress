import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { userContext, userInfoContext } from '../context';

export const Goal = ({ historyData }) => {

    const { userInfo, setUserInfo } = useContext(userInfoContext);

  console.log("historyData:", historyData)
  console.log("userInfo:", userInfo)
  let historyCopy;
  let userInfoCopy;
  let userGoal;
  let mostRecentWeight;
  let startWeight;

  if (historyData) {
    historyCopy = JSON.parse(JSON.stringify(historyData));
    mostRecentWeight = historyCopy[historyCopy.length-1].weight
  }

  if (userInfo) {
    userInfoCopy = JSON.parse(JSON.stringify(userInfo));
    userGoal = userInfoCopy[userInfoCopy.length-1].goal
    startWeight = userInfoCopy[userInfoCopy.length-1].weight
  }
  
  return (
    <div>
      <div id="goal-container">
        <h2>Your Goal:  {userGoal} </h2>
        {mostRecentWeight < startWeight ? <h3>You lost {startWeight-mostRecentWeight } lb since you started</h3> : <h3>You gain { mostRecentWeight-startWeight} lb</h3>}
        <h3>{ mostRecentWeight-userGoal} lb to go. YOU GOT THIS!!</h3>
      </div>
    </div>
  )
}


