import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Form, useActionData } from 'react-router-dom';
import { userContext } from '../context';


export const Signup = () => {
  //console.log("hello??????");
 
  const { userId, setUserId } = useContext(userContext);
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState('');
  const [nextPage, setPage ] = useState('false')
  const navigate = useNavigate();

  useEffect(() => {
    console.log('nextPage??', nextPage)
    if (nextPage === true) {
      console.log("ready to move on to homepage")
      console.log('userId in signup page',userId)
      return navigate("/dashboard");
    }
  });

  const infoForBody = {
    username: username,
    password: password,
    gender: gender,
    height: height,
    weight: weight,
    goal: goal
  }
  
  const signupAction = () => {
    fetch('/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(infoForBody)
    })
    .then(data => data.json())
    .then(data => { 
      console.log('data after signup', data);
      setPage(true);
      setUserId(data.id)  
    })
    .catch(err=>console.log('error in signup', err))
  }
      
  // // If the request repsonse has status 200, convert the response back to JS from JSON and proceed 
  // if (res.status === 200) {
  //   const response = await res.json();

  //   if (response.status === 'valid') {
  //     // console.log('Signup was successful!');
  //     return {user: response.user};
  //   }

  //   if (response.status === 'UserNameExists') {
  //     return { error: 'This username is unavailable, please choose another' };
  //   }
  //   // Included for dev testing, only appears if response.status string in the frontend and backend are misaligned 
  //   return { error: `The status "${response.status}" sent in the response doesn't match the valid cases.` };
  // } 
  // // If the response wasn't 200, let the user know they need to try again later
  // return { error: 'The server was unresponsive. Please try again later'};


//   const navigate = useNavigate();
//   const { user, setUser } = useContext(userContext);
//   const { lastPage } = useContext(pageContext);
//   const data = useActionData();

//   // Set lastPage to variable that will prevent automatic page jump if page has just loaded
//   useEffect(() => {
//     lastPage.current = 'JustLoadedSignUp';
//   }, []);

//   useEffect(() => {
//     // Make sure the user has been set and they didn't just get to this page before navigating to UserHomePage
//     if (user !== null && lastPage.current === '/SignUpPage') {
//       return navigate('/UserHomePage');
//     }
//   }, [user]);

//   // After a user submits info and a valid response from the backend has been received, 
//   // this useEffect will set the user accordingly and update lastPage to a value that allows navigation away from signup
//   useEffect(() => {
//     if (data?.user !== undefined) {
//       setUser(data.user);
//       // Update lastPage to this page on successful submission
//       lastPage.current = '/SignUpPage';
//     }
//   }, [data]);

  return (
    <div className="signup-container">
      
      <h1>Let's Start Your Journey</h1>
      <br></br>
      <div className='signup-box'>
        <h2>Create New Account</h2>
        <br></br>
      {/* <Form method='post' action='/signup' className='signup-form'> */}
      {/* <form id='signup-form' method='post' action='/homepage' onSubmit={signupAction}>   */}
        {/* <label> */}
          <span>New Username</span>
          <br></br>
          <input type="text" name="username" onChange={e => setUsername(e.target.value)} required />
        {/* </label> */}
        <br></br>
        {/* <label> */}
          <span>New Password</span>
          <br></br>
          <input type="password" name="password" onChange={e => setPassword(e.target.value)} required />
        {/* </label> */}
        <br></br>
        {/* <label> */}
          <span>Gender</span>
          <br></br>
          <select onChange={(e) => setGender(e.target.value)} required>
					  <option value='' hidden>
						  Gender
					  </option>
					  <option >Female</option>
					  <option >Male</option>
          </select>
        {/* </label> */}
        <br></br>
        {/* <label> */}
          <span>Height {'('}in Inch{')'}</span>
          <br></br>
          <input type="number" name="height" placeholder='in' onChange={e => setHeight(e.target.value)}required />
        {/* </label> */}
        <br></br>
        {/* <label> */}
          <span>Starting Weight {'('}in Pound{')'}</span>
          <br></br>
          <input type="number" name="weight" placeholder='lb' onChange={e => setWeight(e.target.value)}required />
        {/* </label> */}
        <br></br>
        {/* <label> */}
          <span>Your Goal Weight {'('}in Pound{')'}</span>
          <br></br>
          <input type="number" name="goal" placeholder='lb'onChange={e => setGoal(e.target.value)}/>
        {/* </label> */}
        <br></br>
        <br></br>
        <button type="submit" onClick={signupAction}>Submit</button>
        {/* </form> */}
        </div>
    </div>
  )
};
