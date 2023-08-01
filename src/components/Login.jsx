import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext, loggedInContext } from '../context';

import pp from '../assets/pp.jpg'
// pp2 from '../assets/pp2.jpg'

export const Login = (oauthInfo) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { userId, setUserId } = useContext(userContext);
  const { loggedIn, setLoggedIn } = useContext(loggedInContext);

  useEffect(() => {
    //console.log('updated??', userId)
    if (userId) {
      //console.log("updated userId in Login", userId, userInfo)
      setLoggedIn(!loggedIn)
      return navigate("/dashboard");
     }
  })

  const loginUser = ()=> {
    fetch('/login', {
    method: 'POST',
    //  mode:'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({username, password})
    })
    .then(data => data.json())
    .then(data => {
      //console.log("login data:", data);
      if (data.status === "verified") {
        //console.log('data.userInfo', data.id);
        setUserId(data.id)
      } else {
        alert(data.status)
       } 
    })
    .catch(err=>console.log('error in login', err))
  }  

  const handleSubmit = e => {
    e.preventDefault();
    loginUser();
  }

  return(
    <div>     
      <div className="login-wrapper">
        <div className='login'>
          <div className='login-msg'>
            <h1>Please Log In</h1>
          </div>
          <label>
            <p>Username</p>
            <input className="login-input" type="text" onChange={e => setUsername(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input className="login-input" type="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <br></br>
          <br></br>
          <div>
            <button type="submit" onClick={handleSubmit}>Submit</button>
          </div>
          <br></br>
        </div>
      </div>
    </div>
  )
}
