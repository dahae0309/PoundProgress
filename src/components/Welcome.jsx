import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Form, Link, useActionData } from 'react-router-dom';
import { userContext, pageContext } from '../context';
import { Signup } from './Signup.jsx';
import { Login } from './Login.jsx';
import { Google } from './Google.jsx';
// import pp from '../assets/pp.jpg'
//import pp2 from '../assets/pp2.jpg'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'

//for google Oauth
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import jwt_decode from "jwt-decode";
// const dotenv = require('dotenv');
// dotenv.config();

// function navigate() {
//   window.location.href = url
//  }

// const Oauth = async () => {
//   const response = await fetch('http://localhost:8080/oauth', {
//     method: 'post'
//   })
//   const data = await response.json()
//   console.log(data)
//   navigate(data.url)
// }

//////////////////////////////////
// const client_id = process.env.CLIENT_ID

export const Welcome = () => {

  // const [oauthInfo, setOauthInfo] = useState();
  
  return (
    <div>
      <div className='welcome-container'>
        <img src='../assets/pp2.jpg' className="image" alt="image" />
        <div className='login-quote'>
          <p>“The body achieves what the mind believes.” – Napoleon Hill</p>
        </div>
        <div className='login-signup-container'> 
          <div>
            <Login
              // oauthInfo={oauthInfo}
            />  
          </div>
          <div className='newAccount'> Do not have account? {' '} 
            <Link to="/signup" element={ <Signup />}>Sign Up</Link>
          </div>
          <br></br>
          {/* <div className='oauth'>
            <GoogleOAuthProvider clientId={process.env.CLIENT_ID}>
              <GoogleLogin
                onSuccess={credentialResponse => {
                  var decoded = jwt_decode(credentialResponse.credential);
                  console.log(decoded.name);
                  setOauthInfo(decoded.name)
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
                size='large'
                width="200"
                height="300"
                // shape="pill"
                style={{width: "50%"}}
                //width= 'document.getElementById("GoogleSignInButton").offsetWidth'
                //height= 'document.getElementById("GoogleSignInButton").offsetHeight'
              />
            </GoogleOAuthProvider>
          </div> */}
          <div>
            <Google />
          </div>
        </div> 
      </div>
      <br></br>
      <div className='main-function'>
        {/* <h2>
          Whether you're on a fitness journey, managing weight for health reasons,
          or simply curious about your progress, PoundProgress has got you covered!</h2>
        <br></br>
        <br></br>
          <br></br> */}
        <h3>Track Weight:</h3>
        <h2>Easily log your weight measurements and keep a record of your progress.</h2>
        <img src='../assets/image4.png' className="image4" alt="image" />
        <h3>BMI Calculation:</h3>
        <h2>Check if your current weight is within healthy BMI range.</h2>
        <img src='../assets/image5.png' className="image5" alt="image" />
        <h3>Goal Setting:</h3>
        <h2>Set your target weight and track your progress towards achieving it.</h2>
        <img src='../assets/image6.png' className="image6" alt="image" />
        <h3>Visualize Progress:</h3>
        <h2>View intuitive charts and graphs to visualize your weight trends over time.</h2>
        <img src='../assets/image7.png' className="image7" alt="image" />
        <div className='start-journey'><Link to="/signup" element={ <Signup />}>Start your journey today!</Link></div>
      </div>
    </div>
  )
}