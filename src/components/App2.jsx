import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './Homepage2.jsx';
import Login from './Login.jsx';

function App() {
  const [token, setToken] = useState();


  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
          <Route path="/homepage">
            <Homepage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
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