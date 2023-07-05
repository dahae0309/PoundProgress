import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Form, Link, useActionData } from 'react-router-dom';
import { userContext, pageContext } from '../context';
import { Signup } from './Signup.jsx';
import { Login } from './Login.jsx';
// import pp from '../assets/pp.jpg'
//import pp2 from '../assets/pp2.jpg'


export const Welcome = () => {

  return (
    <div>
      <div className='welcome-container'>
        <img src='../assets/pp2.jpg' className="image" alt="image" />
        <div className='login-quote'>
          <p>“The body achieves what the mind believes.” – Napoleon Hill</p>
        </div>
        <div className='login-signup-container'> 
          <div>
            <Login />  
          </div>
          <div className='newAccount'> Do not have account? {' '} 
            <Link to="/signup" element={ <Signup />}>Sign Up</Link>
          </div>
        </div> 
      </div>
    </div>
  )
}