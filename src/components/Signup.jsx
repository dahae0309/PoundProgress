import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext, oauthContext, loggedInContext } from '../context';


export const Signup = () => {
  //console.log("hello??????", oauthInfo);
 
  const { userId, setUserId } = useContext(userContext);
  const { oauthInfo, setOauthInfo } = useContext(oauthContext);
  const { loggedIn, setLoggedIn } = useContext(loggedInContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState('');
  const [nextPage, setPage ] = useState('false')
  const navigate = useNavigate();
  let infoForBody = {}

  useEffect(() => {
    //console.log('oauthInfo??', oauthInfo)
    //console.log('userId', userId)
    if (nextPage === true) {
      //console.log("ready to move on to homepage")
      return navigate("/dashboard");
    }
  });

  if (oauthInfo) {
      infoForBody = {
      username: oauthInfo,
      password: oauthInfo,
      gender: gender,
      height: height,
      weight: weight,
      goal: goal
    }
  } else {
    infoForBody = {
      username: username,
      password: password,
      gender: gender,
      height: height,
      weight: weight,
      goal: goal
    }
  }

  const signupAction = () => {
    fetch('/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(infoForBody)
    })
    .then(data => data.json())
    .then(data => { 
      console.log('data after signup', data);
      if (data.status === "Existing Username") {
        alert("Please choose different username");
      } else {
        setPage(true);
        setUserId(data.id);
        setLoggedIn(!loggedIn)
      }
    })
    .catch(err=>console.log('error in signup', err))
  }

  return (
    
    <div>
      {oauthInfo ? (
        <div className="signup-container"><h1>Let's Start Your Journey</h1>
          <br></br>
          <div className='signup-box'>
          
            <h2>What is your...</h2>
            <br></br>
              
            <span>Gender</span>
            <br></br>
            <select onChange={(e) => setGender(e.target.value)} required>
              <option value='' hidden>Gender</option>
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
          
            <span>Your Goal Weight {'('}in Pound{')'}</span>
            <br></br>
            <input type="number" name="goal" placeholder='lb'onChange={e => setGoal(e.target.value)}/>
            <br></br>
              
            <br></br>
            <button type="submit" onClick={signupAction}>Submit</button>

          </div>
        </div>
      ) : (
        <div className="signup-container"><h1>Let's Start Your Journey</h1>
      <br></br>
      <div className='signup-box'>
        <h2>Create New Account</h2>
        <br></br>

          <span>New Username</span>
          <br></br>
          <input type="text" name="username" onChange={e => setUsername(e.target.value)} required />

        <br></br>

          <span>New Password</span>
          <br></br>
          <input type="password" name="password" onChange={e => setPassword(e.target.value)} required />

        <br></br>

          <span>Gender</span>
          <br></br>
          <select onChange={(e) => setGender(e.target.value)} required>
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

          <span>Your Goal Weight {'('}in Pound{')'}</span>
          <br></br>
          <input type="number" name="goal" placeholder='lb'onChange={e => setGoal(e.target.value)}/>

        <br></br>
        <br></br>
        <button type="submit" onClick={signupAction}>Submit</button>

          </div>
        </div>
      )}  
    </div>
  )
};
