import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Form, NavLink, useActionData, Outlet, useLocation } from 'react-router-dom';
import { userContext, userInfoContext } from '../context';
import logo from '../assets/ppmain1.png'

export const Shared = () => {

  const { pathname: locationURL } = useLocation();
  const { userId, setUserId } = useContext(userContext);
  //const { userName, setUserName } = useContext(userInfoContext);
  const { userInfo, setUserInfo } = useContext(userInfoContext);

  //console.log(userId, userName)
  const logOut = () => {
    setUserId(null)
    setUserInfo(null)
  }
  let button;
  if (locationURL === '/') {
    button = null;
  } else if (locationURL === '/signup' || locationURL === '/contact') {
    button = <button onClick={logOut}><NavLink to="/">Home</NavLink></button>;
  } else {
    button = <button onClick={logOut}><NavLink to="/">Log Out</NavLink></button>
  }
 
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
        {locationURL === '/contact' ? (
        null
        ) : (
        <button onClick={logOut}><NavLink to="/contact">Contact Us</NavLink></button>    
        )}
        
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