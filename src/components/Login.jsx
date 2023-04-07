import React, { useState } from 'react';


const Login = ()=> {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = ()=> {
  fetch('/login', {
   method: 'POST',
  //  mode:'no-cors',
  headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify({username, password})
 })
  .then(data => data.json())
   .then(data => console.log("login data:", data))
  .catch(err=>console.log('error in login', err))
}  

  const handleSubmit = e => {
    e.preventDefault();
    console.log('hello???')
    loginUser();
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      {/* <form onSubmit={handleSubmit}> */}
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
      {/* </form> */}
    </div>
  )
}



export default Login