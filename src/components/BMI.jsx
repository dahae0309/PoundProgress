import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { userContext, userInfoContext } from '../context';


export const BMI = ({ historyData }) => {
  const { userId, setUserId } = useContext(userContext);
  const { userInfo, setUserInfo } = useContext(userInfoContext);
  let historyCopy;
  let userInfoCopy;

  //console.log("historyData:", historyData)


  if (historyData) {
    historyCopy = JSON.parse(JSON.stringify(historyData));
  }
  //console.log(historyCopy)

    if (userInfo) {
    userInfoCopy = JSON.parse(JSON.stringify(userInfo));
  }
  //console.log(userInfoCopy)

  // console.log('userId', userId)
  // console.log('userInfo',userInfo)

  return (
    <div>
      <div id="BMI-container">
        <div id="BMI">
          <h2>Your BMI is {((historyCopy?.pop().weight)/(userInfoCopy?.pop().height**2) * 703).toFixed(2)}</h2>
          <h2>BMI Range</h2>
          <h3>Below 18.5 : Underweight</h3>
          <h3>18.5 — 24.9 : Healthy Weight</h3>
          <h3>25.0 — 29.9 : Overweight</h3>
          <h3>30.0 and Above : Obesity</h3>
      </div>
    </div>
    </div>
  )
}

//<div id="BMI">BMI: {(currentWeight/(height)**2)* }</div>