import React, { useState, useEffect } from "react";
import Weight from './Weight2.jsx'
import WklyHistory from './WklyHistory2.jsx'
import BarChart from './Chart2.jsx'



const Homepage = () => {
  const [inputWeight, setInputWeight] = useState('');
  const [historyData, setHistoryData] = useState();

  const onChange = (e) => {
    const input = e.target.value;
    setInputWeight(input);
  }

  const saveHistory = () => {
    if (inputWeight) {
      fetch('/history', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ weight: Number(inputWeight) })
      })
      .then(data => data.json())
        .then(data => {
          getData();
          console.log('data is fetched');
        })
      .catch(err => console.log("error in saving history", err));
    }
  };

  const getData = async () => {
    await fetch('/history')
    .then(res => res.json())
    .then(result => {
      setHistoryData(result);
    })
    .catch(err => console.log("error in getting history", err));
  };
    
  const deleteHistory = (weightID) => {
    fetch('/delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: weightID })
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
  }, []);
    

  return (
    <div id="container">
      <div id="quote">Don’t compare yourself to others. Compare yourself to the person from yesterday.</div>
      <div>
        <Weight
          onChange={onChange}
          saveHistory={saveHistory}
          // inputWeight={inputWeight}
          // setInputWeight={setInputWeight}
        />
        <WklyHistory
          historyData={historyData}
          // setHistoryData={setHistoryData}
          deleteHistory={deleteHistory}
        />
        <div id="chart"><BarChart
          historyData={historyData}
          setHistoryData={setHistoryData}
        /></div>
        {/* <Status /> stretch feature */}
      </div>
    </div>
  );
}

export default Homepage;