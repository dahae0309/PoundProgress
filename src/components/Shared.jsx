import React, { useState, useContext, useEffect } from 'react';
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
  
  useEffect(() => {
    //console.log('updated??', userId)
    console.log('loggedIn??',loggedIn)
  })

  const logOut = () => {
    setUserId(null)
    setUserInfo(null)

  ////////////////////////////////////////////////////
  //////need to track loggedIn data and correct it!!!!
  ////////////////////////////////////////////////////

    setLoggedIn(!loggedIn)
    setOauthInfo(null)
    if (!loggedIn) {
      return navigate('/')
     }
  }

  // const backToHome = () => {
  //   return navigate("/");
  // }
  let button;

  // if (locationURL === '/') {
  //   button = null;
  // } else if (locationURL === '/contact' || locationURL === '/privacy' && userId) {
  //   button = <button ><NavLink to="/dashboard">Dashboard</NavLink></button>;
  // } else if (locationURL === '/contact' || locationURL === '/privacy' && userId ===null) {
  //   button = <button ><NavLink to="/" end>Home</NavLink></button>;
  // } else if ((locationURL === '/signup' || locationURL === '/contact' || locationURL === '/privacy') && (userId == null || oauthInfo == null)) {
  //   button = <button ><NavLink to="/" end>Home</NavLink></button>;
  //   // button = <button on onClick={backToHome}>Home</button>;
  // } else if ((locationURL === '/signup' || locationURL === '/contact' || locationURL === '/privacy') && (userId == null )) {
  //   button = <button ><NavLink to="/" end>Home</NavLink></button>;
  //   // button = <button on onClick={backToHome}>Home</button>;
  // }else if (locationURL === '/dashboard'){
  //   button = <button onClick={logOut}><NavLink to="/">Log Out</NavLink></button>
  // }
  if (locationURL === '/') {
    button = null;
  } else if ((locationURL === '/contact' || locationURL === '/privacy') && loggedIn) {
    button = <button ><NavLink to="/dashboard" end>Dashboard</NavLink></button>;
    // button = <button on onClick={backToHome}>Home</button>;
  } else if ((locationURL === '/contact' || locationURL === '/privacy' || locationURL === '/signup') && !loggedIn) {
    button = <button onClick={logOut}><NavLink to="/" end>Home</NavLink></button>;
    // button = <button on onClick={backToHome}>Home</button>;
  }else if (locationURL === '/dashboard' && loggedIn){
    button = <button onClick={logOut}><NavLink to="/">Log Out</NavLink></button>
  }

  let footer;
  if (locationURL === '/' || locationURL === '/signup' || locationURL === '/dashboard') {
      footer = <div className='footer-nav'>
          <button ><NavLink to="/contact">Contact Us</NavLink></button>
          <button ><NavLink to="/privacy">Privacy</NavLink></button>  
        </div>
  } else if (locationURL === '/contact') {
    footer = <button ><NavLink to="/privacy">Privacy</NavLink></button>  
  } else if(locationURL === '/privacy'){
    footer = <button ><NavLink to="/contact">Contact Us</NavLink></button>
    }
  

              //   <button onClick={logOut}><NavLink to="/contact">Contact Us</NavLink></button>
              // <button onClick={logOut}><NavLink to="/privacy">Privacy</NavLink></button>  
 
  return (
    // <div>
    //   <div className='applicationName'>
    //     {/* POSSIBLE NAVBAR HERE! */}
    //     <h1>Pound
    //       Progress</h1>
    //   </div>
    //   <div className='welcome-container'>
    //     <img src='../assets/pp2.jpg' className="image" alt="image" />
    //     <div className='login-quote'>
    //       <p>“The body achieves what the mind believes.” – Napoleon Hill</p>
    //     </div>
    //     <div className='login-signup-container'>
    //       <div>
    //         <Login />
    //       </div>
    //       <div className='newAccount'> Do not have account? {' '}
    //         <Link to="/signup" element={ <Signup />}>Sign Up</Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='shared'>   
      <div className='applicationName'>
        <img src='../assets/ppmain1.png' className="main-logo" alt="image" />
        <div className='welcome-user'>{userInfo ? (<h2>Welcome, {userInfo[0].username}</h2>):(null)}</div>
        {/* POSSIBLE NAVBAR HERE! */}
        {/* {locationURL === '/' || locationURL === '/signup' || locationURL === '/contact'? (
          null
        // <button onClick={logOut}><NavLink to="/">Home</NavLink></button>
        ) : (
          <div className='logout' style={{ color: 'white' }}>
            <button onClick={logOut}><NavLink to="/">Log Out</NavLink></button>
          </div>
        )
        } */}
        {button}
      </div>
      {/* <div class="footer">
        <p>Footer</p>
      </div> */}
      <div>
        <Outlet/>
      </div>
      <div className="footer">
        {/* {locationURL === '/contact' ? (
        <button onClick={logOut}><NavLink to="/privacy">Privacy</NavLink></button> 
        ) : (
            <div className='footer-nav'>
              <button onClick={logOut}><NavLink to="/contact">Contact Us</NavLink></button>
              <button onClick={logOut}><NavLink to="/privacy">Privacy</NavLink></button>  
            </div>    
        )} */}
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