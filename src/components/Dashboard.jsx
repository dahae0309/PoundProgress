import React, { useState, useEffect, useContext } from "react";
import Weight from './Weight2.jsx'
import WklyHistory from './WklyHistory2.jsx'
import BarChart from './Chart2.jsx'
import { BMI } from './BMI.jsx'
import { Goal } from './Goal.jsx'
import { userContext, userInfoContext, oauthContext, loggedInContext } from '../context';
import pp3 from '../assets/pp3.jpg'

const Dashboard = () => {
  const [inputWeight, setInputWeight] = useState('');
  const [historyData, setHistoryData] = useState();
  const { userId, setUserId } = useContext(userContext);
  const { userInfo, setUserInfo } = useContext(userInfoContext);
  // const { oauthInfo, setOauthInfo } = useContext(oauthContext);
  // const { loggedIn, setLoggedIn } = useContext(loggedInContext);

  const onChange = (e) => {
    const input = e.target.value;
    setInputWeight(input);
  }

  const saveHistory = () => {
    if (inputWeight) {
      fetch('/history', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ weight: Number(inputWeight), userId: userId })
      })
      .then(data => data.json())
        .then(data => {
          getData();
          //console.log('data is fetched');
        })
      .catch(err => console.log("error in saving history", err));
    }
  };

  const getData = async () => {
    await fetch('/history', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({userId: userId })
    })
    .then(data => data.json())
      .then(data => {
        // console.log(data)
        // console.log(data.userInfo)
        const sortedHistory = data.history?.slice().sort((a,b)=>a.id-b.id) 
        setHistoryData(sortedHistory);
        setUserInfo(data.userInfo)
    })
    .catch(err => console.log("error in getting history", err));
  };
    
  const deleteHistory = (weightId) => {
    console.log('weightID',weightId)
    fetch('/delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ weightId: weightId })
    })
      .then(data => data.json())
      .then(data => {
        getData();
        console.log(data, "data is deleted");
    })
    .catch(err => console.log("error in saving history", err));
    };
    
  useEffect(() => {
    getData();
    // console.log('userId', userId)
    // console.log('userInfo', userInfo)
    // console.log('oauthInfo', oauthInfo)
    // console.log('loggedIn',loggedIn)
  }, []);
  

//   return (
//     <div id="container">
//       {/* <div id="quote">"Don’t compare yourself to others. Compare yourself to the person from yesterday."</div> */}
//       <div className="dashboard">
//         <Weight
//           onChange={onChange}
//           saveHistory={saveHistory}
//         />
//         <div className="middle-box">
//           <WklyHistory
//             historyData={historyData}
//             deleteHistory={deleteHistory}
//           />
//           <div className="bmi-goal-chart">
//             <div className="bmi-goal">
//               <BMI
//                 historyData={historyData}
//               />
//               <Goal
//                 getData={getData}
//                 historyData={historyData}
//               />
//             </div>
//             <div id="chart">
//               <BarChart
//                 historyData={historyData}
//                 setHistoryData={setHistoryData}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="dashboard-image">
//           <img src='../assets/pp3.jpg' className="image" alt="image" />
//           <p className="dashboard-image-quote">"Nothing is impossible. The word itself says I'm possible."</p>
//         </div>
//       </div>
//     </div>
//   );
// }
    return (

      <div className="dashboard">
        <div className="middle-box">
         
            <div className="bmi-goal">
              <BMI
                historyData={historyData}
              />
              <Goal
                getData={getData}
                historyData={historyData}
            />
            <div className="recommendation">
              <p>Healthy Recipe is COMING SOON!</p>
            </div>
            </div>
            <div id="input-history-chart">
              <Weight
                onChange={onChange}
                saveHistory={saveHistory}
              />
              <div className="history-chart">
                <WklyHistory
                  historyData={historyData}
                  deleteHistory={deleteHistory}
                />
                <BarChart
                  historyData={historyData}
                  setHistoryData={setHistoryData}
                />
              </div>
            </div>
              
        </div>
        <div className="dashboard-image">
          <img src='../assets/pp3.jpg' className="image" alt="image" />
          <p className="dashboard-image-quote">"Nothing is impossible. The word itself says I'm possible."</p>
        </div>
      </div>

  );
}

export default Dashboard;