import React, { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Dashboard from './Dashboard';
import { Welcome } from './Welcome';
import { Login } from './Login';
import { Signup } from './Signup';
import { Shared } from './Shared';
import { Contact } from './Contact';
import { Privacy } from './Privacy';
import { Google } from './Google';
import { userContext, userInfoContext, oauthContext, loggedInContext } from '../context';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Shared />}>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/oauth" element={ <Google />} />
    </Route>
  )
)

const App = ()=> {
  const [ userId, setUserId ] = useState(null); 
  const [userInfo, setUserInfo] = useState(null); 
  const [oauthInfo, setOauthInfo] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  
  return (
  
    <userContext.Provider value={{ userId, setUserId }}>
      <userInfoContext.Provider value={{ userInfo, setUserInfo }}>
        <oauthContext.Provider value={{ oauthInfo, setOauthInfo }}>
          <loggedInContext.Provider value={{loggedIn, setLoggedIn}}>
            <RouterProvider router={router} />
          </loggedInContext.Provider>
        </oauthContext.Provider>
      </userInfoContext.Provider>
    </userContext.Provider>
  );
}

export default App;
