import React, { useEffect, useContext } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { userInfoContext } from '../context';

export const BMI = ({ historyData }) => {

  const { userInfo, setUserInfo } = useContext(userInfoContext);
  let BMI;
  const noBMI = "Please enter your weight to calculate your BMI"

  // useEffect(() => {
  //   console.log(userInfo)
  // }, [userInfo]);

  if (historyData) {
    //historyCopy = JSON.parse(JSON.stringify(historyData));

    if (userInfo[0].height === 0) {
      BMI = <div style={{ color: 'blue' }}>Please update your information<button id='height'>Update</button></div>;
    } else {
      BMI = (((historyData[historyData.length - 1].weight) / (userInfo[0].height) ** 2) * 703).toFixed(2);

      //console.log("BMI", BMI);

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
          <div className='current-BMI'>
            <h2 className='BMIis'>Your BMI is</h2>
            <h2 className='actualBMI'> {BMI}</h2>
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
