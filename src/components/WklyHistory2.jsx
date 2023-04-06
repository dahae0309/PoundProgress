import React, { useState, useEffect } from 'react';

const WklyHistory = ({ historyData, deleteHistory }) => {

  console.log("historyData:",historyData)
  
  return (
    <div id="historySection">
      <div id="history">Your History</div>
      <div id="hisContainer">
        {historyData?.map(weightObj => (
          <div id="innerBox" key={weightObj.id}>
          <button id="delete" onClick={() => deleteHistory(weightObj.id)}>Delete</button>
          <div id="weight">Weight: {weightObj.weight}</div>
          <div style={{ color: 'gray' }}>Date:{new Date(weightObj.created_at).toLocaleString()}</div>
          </div>
        
        ))}
      </div>
    </div>
  )
}

export default WklyHistory;
