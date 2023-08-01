import React, { useContext, useEffect } from 'react';
import { useNavigate, Form, NavLink, useActionData, Outlet, useLocation } from 'react-router-dom';
import { userContext, userInfoContext, oauthContext, loggedInContext } from '../context';
import logo from '../assets/ppmain1.png'

export const Shared = () => {

  const { pathname: locationURL } = useLocation();
  const { userId, setUserId } = useContext(userContext);
  //const { userName, setUserName } = useContext(userInfoContext);
  const { userInfo, setUserInfo } = useContext(userInfoContext);
  const { oauthInfo, setOauthInfo } = useContext(oauthContext);
  const { loggedIn, setLoggedIn } = useContext(loggedInContext);
  const navigate = useNavigate();
  //console.log("userInfo", userInfo)
  
  //useEffect(() => {
    //console.log('updated??', userId)
    //console.log("userInfo", userInfo)
    //console.log('loggedIn??',loggedIn)
  //})

  const logOut = () => {
    setUserId(null)
    setUserInfo(null)
    setLoggedIn(!loggedIn)
    setOauthInfo(null)
    if (!loggedIn) {
      return navigate('/')
    }
  }

  const backToDashboard = () => {
    return navigate("/dashboard");
  }

  const backToWelcome = () => {
    setOauthInfo(null)
    return navigate("/");
  }

  let button;
  if (locationURL === '/') {
    button = null;
  } else if ((locationURL === '/contact' || locationURL === '/privacy') && loggedIn) {
    button = <button onClick={backToDashboard}><NavLink to="/dashboard" end>Dashboard</NavLink></button>;
    // button = <button on onClick={backToHome}>Home</button>;
  } else if ((locationURL === '/contact' || locationURL === '/privacy' || locationURL === '/signup') && !loggedIn) {
    button = <button onClick={backToWelcome}><NavLink to="/" end>Home</NavLink></button>;
    // button = <button on onClick={backToHome}>Home</button>;
  }else if (locationURL === '/dashboard' && loggedIn){
    button = <button onClick={logOut}><NavLink to="/">Log Out</NavLink></button>
  }

  let footer;
  if (locationURL === '/' || locationURL === '/signup' || locationURL === '/dashboard') {
    footer =  <div className='footer-nav'>
                <button ><NavLink to="/contact">Contact Us</NavLink></button>
                <button ><NavLink to="/privacy">Privacy</NavLink></button>  
              </div>
  } else if (locationURL === '/contact') {
    footer = <button ><NavLink to="/privacy">Privacy</NavLink></button>  
  } else if(locationURL === '/privacy'){
    footer = <button ><NavLink to="/contact">Contact Us</NavLink></button>
    }
 
  return (
    <div className='shared'>   
      <div className='applicationName'>
        <img src='../assets/ppmain1.png' className="main-logo" alt="image" />
        <div className='welcome-user'>{userInfo ? (<h2>Welcome, {userInfo[0].username}</h2>):(null)}</div>
        {button}
      </div>
      <div>
        <Outlet/>
      </div>
      <div className="footer">
        {footer}
      </div>
    </div>
  )
};


    //  {locationURL === '/' || locationURL === '/signup' ? (
    //     <div className='applicationName'>
    //       {/* POSSIBLE NAVBAR HERE! */}
    //       <img src='/assets/PPmain1.jpg' className="main-logo" alt="image" />
      
    //       {/* <img src='../assets/pp2.jpg' className="image" alt="image" /> */}
    //       {/* <div> */}
    //       {/* <h1>Pound
    //           Progress</h1> */}
    //       {/* </div> */}
    //     </div>
    //   ) : (
    //     <div className='applicationName'>
    //         {/* POSSIBLE NAVBAR HERE! */}
    //       <img src='../assets/PPmain1.jpg' className="main-logo" alt="image" />
    //       {/* <h1>Pound
    //           Progress</h1> */}
    //       <div className='logout' style={{ color: 'white' }}>
    //         <button onClick={logOut}><NavLink to="/">Log Out</NavLink></button>
    //       </div>
    //     </div>
    //   )
    //   }