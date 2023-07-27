import React, { useState, useEffect, useContext } from 'react';
import { userInfoContext } from '../context';          

export const InfoModal = ({userId, infoModal, setInfoModal, getData, historyData}) => {

  //console.log(historyData)
  
  const { userInfo, setUserInfo } = useContext(userInfoContext);
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState('');

  const startingWeight = historyData?.slice().sort((a,b)=>a.id-b.id)[0]
  //console.log(startingWeight.id)
  
  const infoToUpdate = {
    id: userId,
    gender: gender,
    height: height,
    weight: weight,
    goal: goal
  }

  const toggleInfoModal = () => {
    setInfoModal(!infoModal)
  }

  const updateStartingWeightInHistory = () => {
    fetch('/update/weight', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id:startingWeight.id, weight: weight})
    })
    .then(data => data.json())
    .then(data => {
      //console.log('data after update info', data);
      //console.log('need to finish this function');
      console.log("start weight has been updated")
    })
    .catch(err => console.log('error in signup', err));
  }
  
  const updateInfo = () => {

    toggleInfoModal()

    if (gender === "" || height === "" || weight === "") {
      alert("Please enter GENDER, HEIGHT, and WEIGHT");
    } else {
      fetch('/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(infoToUpdate)
      })
        .then(data => data.json())
        .then(data => {
          //console.log('data after update info', data);
          //console.log('need to finish this function');
          console.log("infoModal")
          setUserInfo(userInfo)
          updateStartingWeightInHistory()
          getData()
        })
        .catch(err => console.log('error in signup', err));
    }
  }

  useEffect(() => {
    console.log(userInfo)
  }, [userInfo]);

  return (
    <div className='info-modal'>
      <div className='info-overlay'></div>
      <div className='info-modal-content'>
        <div className='info-modal-container'>

          <div className='modal-title'>
            <h2>Update Your Information</h2>
          </div>

          <div className='info-modal-body'>
            <span>Gender</span>
            <br></br>
            <select style={{ height: '2.4vh', fontSize: '1.8vh' }}onChange={(e) => setGender(e.target.value)} required>
					    <option value='' hidden>
						    Gender
					    </option>
					    <option >Female</option>
					    <option >Male</option>
            </select>
            <br></br>
      
            <span>Height {'('}in Inch{')'}</span>
            <br></br>
            <input type="number" name="height" placeholder='in' onChange={e => setHeight(e.target.value)}required />
            <br></br>
       
            <span>Starting Weight {'('}in Pound{')'}</span>
            <br></br>
            <input type="number" name="weight" placeholder='lb' onChange={e => setWeight(e.target.value)}required />
            <br></br>
      
            {/* <span>Your Goal Weight {'('}in Pound{')'}</span>
            <br></br>
            <input type="number" name="goal" placeholder='lb'onChange={e => setGoal(e.target.value)}/>
            <br></br> */}
          </div>

          <div className='info-modal-footer'>
            <button className='update-button'type="submit" onClick={updateInfo}>Update</button>
            <button className='close-button' onClick={toggleInfoModal}>Cancel</button>
          </div>

        </div>
      </div>
    </div>
  )
}

