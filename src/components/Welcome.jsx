import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Signup } from './Signup.jsx';
//import { Login } from './Login.jsx';
//import { Google } from './Google.jsx';
//import { userContext, userInfoContext, oauthContext, loggedInContext } from '../context';

import pp from '../assets/pp.jpg'
import pp2 from '../assets/pp2.jpg'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'
import image9 from '../assets/image9.png'
import image10 from '../assets/image10.png'
import image11 from '../assets/image11.png'
import image12 from '../assets/image12.png'
import image16 from '../assets/image16.png'
import image14 from '../assets/image14.png'
import image15 from '../assets/image15.png'

const Welcome = () => {

  //to fix shared page
  // const { userId, setUserId } = useContext(userContext);
  // const { userInfo, setUserInfo } = useContext(userInfoContext);
  // const { oauthInfo, setOauthInfo } = useContext(oauthContext);
  // const { loggedIn, setLoggedIn } = useContext(loggedInContext);
  // useEffect(() => {
  //   console.log('userId', userId)
  //   console.log('userInfo', userInfo)
  //   console.log('oauthInfo', oauthInfo)
  //   console.log('loggedIn',loggedIn)
  // });

  return (
    <div className='welcome'>
      <div className='welcome-container'>
        <img src='../assets/pp2.jpg' className="image" alt="image" />
        <div className='login-quote'>
          <p>“The body achieves what the mind believes.” – Napoleon Hill</p>
        </div>
        {/* <div className='login-signup-container'> 
          <div>
            <Login />  
          </div>
          <div className='newAccount'> Do not have account? {' '} 
            <Link to="/signup" element={<Signup />}>Sign Up</Link>
          </div>
          <br></br>
          <div>
            <Google />
          </div>
        </div>  */}
      </div>
      <br></br>
      <div className='main-function'>
        {/* <h2>
          Whether you're on a fitness journey, managing weight for health reasons,
          or simply curious about your progress, PoundProgress has got you covered!</h2>
        <br></br>
        <br></br>
          <br></br> */}
        <h3>Track Weight</h3>
        <h2>Easily log your weight measurements and keep a record of your progress.</h2>
        <img src='../assets/image4.png' className="image4" alt="image" />
        {/* <img src='../assets/image9.png' className="image9" alt="image" /> */}
        <h3>BMI Calculation</h3>
        <h2>Check if your current weight is within healthy BMI range.</h2>
        <img src='../assets/image5.png' className="image5" alt="image" />
        {/* <img src='../assets/image16.png' className="image16" alt="image" /> */}
        <h3>Goal Setting</h3>
        <h2>Set your target weight and track your progress towards achieving it.</h2>
        <img src='../assets/image6.png' className="image6" alt="image" />
        <h3>Visualize Progress</h3>
        <h2>View intuitive charts and graphs to visualize your weight trends over time.</h2>
        <img src='../assets/image7.png' className="image7" alt="image" />
        <div className='start-journey'><Link to="/signup" element={ <Signup />}>Start your journey today!</Link></div>
      </div>
    </div>
  )
};

export default Welcome;