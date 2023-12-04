import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { userContext, loggedInContext } from '../context';
import { Signup } from './Signup.jsx';
import { Google } from './Google.jsx';
import pp from '../assets/pp.jpg'
import pp4 from '../assets/pp4.jpg'
// pp2 from '../assets/pp2.jpg'

export const Login = (oauthInfo) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { userId, setUserId } = useContext(userContext);
  const { loggedIn, setLoggedIn } = useContext(loggedInContext);

  useEffect(() => {
    //console.log('updated??', userId)
    //console.log(loggedIn)
    if (userId) {
      //console.log("updated userId in Login", userId, userInfo)
      setLoggedIn(!loggedIn)
      return navigate("/dashboard");
     }
  })

  const loginUser = ()=> {
    fetch('/login', {
    //fetch('https://pound-progress-cu407eiyt-das-kangs-projects.vercel.app/login', {
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
        <img src='../assets/pp4.jpg' className="login-image" alt="image" />
        <div className='login'>
          <div className='login-msg'>
            <h1>Welcome Back!</h1>
            <p>Enter your username and password to log in </p>
          </div>
          <br></br>
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
            <button type="submit" onClick={handleSubmit}>Log In</button>
          </div>
          <br></br>
          <div className='newAccount'> Do not have account? {' '} 
            <Link to="/signup" element={<Signup />}>Sign Up</Link>
          </div>
          <br></br>
          <div>
            <Google />
          </div>
        </div>
      </div>
    </div>
  )
}
