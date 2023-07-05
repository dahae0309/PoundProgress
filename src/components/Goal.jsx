import React, { useState, useEffect, useContext, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { userContext, userInfoContext } from '../context';

export const Goal = ({ historyData, getData }) => {

  const { userInfo, setUserInfo } = useContext(userInfoContext);
  const { userId, setUserId } = useContext(userContext);

  //console.log("historyData:", historyData)
  //console.log("userInfo:", userInfo)
  let historyCopy;
  let userInfoCopy;
  let userGoal;
  let mostRecentWeight;
  let startWeight;

    if (historyData) {
    //historyCopy = JSON.parse(JSON.stringify(historyData));
    //userInfoCopy = JSON.parse(JSON.stringify(userInfo));
    startWeight = userInfo[0].weight
    userGoal = userInfo[0].goal
    mostRecentWeight = historyData[historyData.length-1].weight
    
  }

  // if (historyData) {
  //   historyCopy = JSON.parse(JSON.stringify(historyData));
  //   userInfoCopy = JSON.parse(JSON.stringify(userInfo));
  //   startWeight = userInfoCopy[0].weight
  //   userGoal = userInfoCopy[0].goal
  //   if (historyData.length === 0) {
  //     mostRecentWeight = userInfoCopy[0].weight
  //   } else {
  //     mostRecentWeight = historyCopy[historyCopy.length-1].weight
  //   }
  // }
  
  const [modal, setModal] = useState(false)
  const [newGoal, setNewGoal] = useState('')

  const onChange = (e) => {
    const input = e.target.value;
    setNewGoal(input);
  }

  const toggleModal = () => {
    setModal(!modal)
  }
  
  const updateGoal = () => {
    toggleModal()

    if (newGoal) {
      fetch('/newgoal', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newGoal: Number(newGoal), userId: userId })
      })
      .then(data => data.json())
        .then(data => {
          console.log('hellllooo????')
          getData();
          //console.log('data is fetched');
        })
      .catch(err => console.log("error in saving history", err));
    }
  }



  return (
    <div>
      <div id="goal-container">
        <div className='goal'>
          <h2>Your Goal:  {userGoal}  </h2>
          <button className="new-goal-button" onClick={toggleModal}>New Goal</button>
        </div>
          {modal && (
            <div className='modal'>
              <div className='overlay'></div>
              <div className='modal-content'>
                <p>Set Your New Goal</p>
                <input name="weight" type="text" placeholder="lb" onChange={onChange}></input>
                <button className='update-button' onClick={updateGoal}>Update</button>
                <button className='close-button' onClick={toggleModal}>Cancel</button>
              </div>
            </div>
          )
          }
        {/* </h2> */}
        {/* <h3>You started from {startWeight} lb</h3> */}
        <div className='progress'>
          {mostRecentWeight < startWeight ? <h3>You lost <div style={{ color: 'blue' }}>{startWeight-mostRecentWeight} lb </div> since you started.</h3> : <h3>You gain <div style={{ color: 'blue' }}>{ mostRecentWeight-startWeight} lb </div> since you started</h3>}
        </div>
        {/* <h3>{ mostRecentWeight-userGoal} lb to go. YOU GOT THIS!!</h3> */}
        <div className='plan'>
          {mostRecentWeight - userGoal > 0 ? <h3><div style={{ color: 'red' }}>{mostRecentWeight - userGoal} lb </div> to go. YOU GOT THIS!!</h3> : <div style={{ color: 'green' }}><h3>You reached your GOAL! GREAT JOB!</h3></div>}
        </div>
      </div>
    </div>
  )
}


