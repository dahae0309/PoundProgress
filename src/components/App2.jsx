import React, { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
//import createBrowserRouter from 'react-router-dom'
import Dashboard from './Dashboard';
import { Welcome } from './Welcome';
import { Login } from './Login';
import { Signup } from './Signup';
import { userContext } from '../context';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Welcome />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={ <Signup />} />
    </Route>
  )
)

const App = ()=> {
  const [ userId, setUserId ] = useState(null); 
  return (
    // <div className="wrapper">
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={ <Login />}/>
    //       <Route path="/homepage" element={ <Homepage />} />
    //     </Routes>
    //   </BrowserRouter>

    // </div>
    <userContext.Provider value={{ userId, setUserId }}>

          <RouterProvider router={router} />

    </userContext.Provider>
  );
}

export default App;

// import React from 'react';
// import Homepage from './Homepage2.jsx';
// import Login from './Login.jsx';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

// const App = () => {
//   return (
//       <div className="wrapper">
//       <BrowserRouter>
//         <Switch>
//           <Route path="/">
//             <Homepage />
//           </Route>
//           <Route path="/login">
//             <Login />
//           </Route>
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
  
// }

// export default App;