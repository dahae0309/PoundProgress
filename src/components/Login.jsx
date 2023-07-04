import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Form, Link, useActionData } from 'react-router-dom';
import { userContext, pageContext } from '../context';
import { Signup } from './Signup.jsx';
// import pp from '../assets/pp.jpg'
import pp2 from '../assets/pp2.jpg'


export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { userId, setUserId } = useContext(userContext);
  //const { userInfo, setUserInfo } = useContext(userContext);
  // const { userGender, setUserGender } = useContext(userContext);
  // const { userHeight, setUserHeight } = useContext(userContext);
  // const { userWeight, setUserWeight } = useContext(userContext);
  // const { userGoal, setUserGoal } = useContext(userContext);
  //const { currentPage } = useContext(pageContext)

  // useEffect(() => {
  //   if (id !== undefined) {
  //     console.log('id', id)
  //     setUserId(id);
  //     console.log('userId',userId)
  //   }
  // }, [id]);

  useEffect(() => {
    //console.log('updated??', userId)
    if (userId) {
      //console.log("updated userId in Login", userId, userInfo)
      return navigate("/dashboard");
     }
   })

  const loginUser = ()=> {
   fetch('/login', {
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
        // setUserInfo(data.userInfo.userInfo)
        // setUserGender(data.userInfo.gender)
        // setUserWeight(data.userInfo.weight)
        // setUserHeight(data.userInfo.height)
        // setUserGoal(data.userInfo.goal)
        //return navigate("/homepage");
      } else {
        alert(data.status)
       } 
    })
    //  .then(data => {
    //    console.log(userId)
    //    return navigate("/homepage");
    //   })
  .catch(err=>console.log('error in login', err))
}  

  const handleSubmit = e => {
    e.preventDefault();

    //console.log(username, password)

    loginUser();
  }

  return(
    <div>
      {/* <div className='applicationName'>
        <h1>Pound
          Progress</h1>
      </div> */}
      {/* <div className='login-container'> */}
        {/* <img src={pp} alt=""/> */}
        {/* <img src={pp2} /> */}
        {/* <img src='../assets/pp2.jpg' className="image" alt="image"/> */}
        {/* <img src={require('../assets/pp2.jpg').default} /> */}
        {/* <img src={require('../assets/pp2.jpg')}></img> */}
        {/* <div className='login-quote'>
          <p>“The body achieves what the mind believes.” – Napoleon Hill</p>
        </div> */}
      
      <div className="login-wrapper">
        <div className='login'>
          <div className='login-msg'>
            <h1>Please Log In</h1>
          </div>
          {/* <form onSubmit={handleSubmit}> */}
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
            <button type="submit" onClick={handleSubmit}>Submit</button>
          </div>
          <br></br>
          {/* </form> */}
          {/* <div className='newAccount'> Do not have account? {' '} 
            <Link to="/signup" element={ <Signup />}>Sign Up</Link>
          </div> */}
        </div>
      </div>
      </div>
  
  )
}



//export default Login;