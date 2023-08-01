import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext, oauthContext, loggedInContext } from '../context';

export const Google = () => {
  
  const navigate = useNavigate();
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const { userId, setUserId } = useContext(userContext);
  const { oauthInfo, setOauthInfo } = useContext(oauthContext);
  const { loggedIn, setLoggedIn } = useContext(loggedInContext);

  const oauthLogin = async(username, password) => {
      await fetch('/oauth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
      .then(data => data.json())
        .then(data => {
        if (data.status === "verified") {
          setUserId(data.id);
        } else {
          setOauthInfo(username)
        }
      })
      .catch(err => console.log('error in login', err));
  } 

  if (Username!=='' && Password!=='') {
    const username = Username
    const password = Password
    //console.log(username,password)
    oauthLogin(username, password)
  } 
   
  useEffect(() => {
    //console.log('updated??', userId)
    if (userId) {
      //console.log("updated userId in Login", userId, userInfo)
      setLoggedIn(!loggedIn)
      return navigate("/dashboard");
    }
    if (oauthInfo) {
      return navigate("/signup");
    }
  })

  return (
    <div>
      <div className='oauth'>
        <GoogleOAuthProvider clientId={process.env.CLIENT_ID}>
          <div>
          <GoogleLogin
            onSuccess={credentialResponse => {
              const decoded = jwt_decode(credentialResponse.credential);
              //console.log(decoded.name);
              setUsername(decoded.name);
              setPassword(decoded.name)
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            size='large'
            width="200"
            height="300"
            // shape="pill"
            style={{ width: "50%" }} 
            />
          </div>
        </GoogleOAuthProvider>
      </div>
    </div> 
  );
};

  // let username;
  // let password;

  // const infoForBody = {
  //   username: Username,
  //   password: Password,
  //   gender: 'need info',
  //   height: 0,
  //   weight: 0,
  //   goal: 0
  // }

  // const oauthSignup = async (infoForBody) => {
  //   await fetch('/oauth/signup', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(infoForBody)
  //     })
  //     .then(data => data.json())
  //     .then(data => { 
  //       //console.log('data after signup', data);
  //       if (data.status === "Existing Username") {
  //         alert("Please choose different username");
  //       } else {
  //         setPage(true);
  //         setUserId(data.id);
  //       }
  //     })
  //     .catch(err=>console.log('error in signup', err))
  //  }