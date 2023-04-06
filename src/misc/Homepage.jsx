// import React, { Component } from 'react';
import Weight from './Weight.jsx'
import WklyHistory from './WklyHistory.jsx'
import BarChart from './Chart.jsx'

import React, { useState } from 'react';

const Homepage = () => {
  const [inputWeight, setInputWeight] = useState('')

  return (
    <div id="container">
      <div id="quote">Don’t compare yourself to others. Compare yourself to the person from yesterday.</div>
      <div>    
        <Weight />
        {/* <Status /> */}
        <WklyHistory />
        <div id="chart"><BarChart /></div>
      </div> 
    </div>
  )};
export default Homepage;


// class Homepage extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div id="container">
//         <div id="quote">Don’t compare yourself to others. Compare yourself to the person from yesterday.</div>
//         <div>    
//         <Weight />
//         {/* <Status /> */}
//         <WklyHistory />
//         <div id="chart"><BarChart /></div>
//         </div> 
//       </div>
//     );
//   }
// }
// export default Homepage;