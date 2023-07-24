import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { userContext, userInfoContext } from '../context';


export const BMI = ({ historyData }) => {
  //const { userId, setUserId } = useContext(userContext);
  const { userInfo, setUserInfo } = useContext(userInfoContext);
    //const [BMI, setBMI] = useState('');
  // let historyCopy;
  // let userInfoCopy;
  let BMI;
  const noBMI = "Please enter your weight to calculate your BMI"

  console.log("historyData:", historyData)
  console.log("userInfo:", userInfo)
  
  // if (userInfo[0].height === 0) {
  //   console.log("here!!!!!!!!!!!!!!!!!!!!")
  //   BMI = <div style={{ color: 'black' }}>Need info</div>
  //  }


  if (historyData) {
    //historyCopy = JSON.parse(JSON.stringify(historyData));

    if (userInfo[0].height === 0) {
      BMI = <div style={{ color: 'blue' }}>Need HEIGHT for BMI <button id='height'>Update</button></div>;
    } else {
      BMI = (((historyData[historyData.length - 1].weight) / (userInfo[0].height) ** 2) * 703).toFixed(2);
      // userInfoCopy = JSON.parse(JSON.stringify(userInfo));
      // if (historyData.length === 0) {
      //   //console.log("use userInfo", userInfo);
      //   // userInfoCopy = JSON.parse(JSON.stringify(userInfo));
      //   BMI = (((userInfoCopy[0].weight) / (userInfoCopy[0].height) ** 2) * 703).toFixed(2);
      // } else {
      //   //console.log("use historyData and userInfo", historyData, userInfo);
      //   // historyCopy = JSON.parse(JSON.stringify(historyData));
      //   // userInfoCopy = JSON.parse(JSON.stringify(userInfo));
      //   BMI = (((historyCopy[historyCopy.length - 1].weight) / (userInfoCopy[0].height) ** 2) * 703).toFixed(2);
      // }
      console.log("BMI", BMI);

      if (BMI < 18.5) {
        BMI = <div style={{ color: 'grey' }}>{BMI}</div>;
      } else if (BMI >= 18.5 && BMI < 25) {
        BMI = <div style={{ color: 'green' }}>{BMI}</div>;
      }
      else if (BMI >= 25 && BMI < 30) {
        BMI = <div style={{ color: 'orange' }}>{BMI}</div>;
      }
      else if (BMI >= 30) {
        BMI = <div style={{ color: 'red' }}>{BMI}</div>;
      }
    }
  }

  return (
    <div>
      <div id="BMI-container">
        <div className="BMI">
          {/* <h2>Your BMI is {((historyCopy?.pop().weight)/(userInfoCopy?.pop().height**2) * 703).toFixed(2)}</h2> */}
          {/* <h2>Your BMI is {BMI!==null? BMI: noBMI}</h2> */}
          <div className='current-BMI'>
            <h2>Your BMI is</h2>
            <h2> {BMI}</h2>
          </div>
          <h2>BMI Range</h2>
          <div style={{ color: 'grey' }}><h3>Below 18.5 : Underweight</h3></div>
          <div style={{ color: 'green' }}><h3>18.5 — 24.9 : Healthy Weight</h3></div>
          <div style={{ color: 'orange' }}><h3>25.0 — 29.9 : Overweight</h3></div>
          <div style={{ color: 'red' }}><h3>30.0 and Above : Obesity</h3></div>
      </div>
    </div>
    </div>
  )
}

//<div id="BMI">BMI: {(currentWeight/(height)**2)* }</div>