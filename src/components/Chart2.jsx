import React, { useState, useEffect, useContext } from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { userContext, userInfoContext } from '../context';


const BarChart = ({historyData}) => {

  //console.log("historyData2:", historyData)  
  const { userInfo, setUserInfo } = useContext(userInfoContext);
  const date = historyData?.map(weightObj => new Date(weightObj.created_at).toLocaleDateString())
  //console.log(date)
  const weightHistory = historyData?.map(weightObj => weightObj.weight)

  const chartData = {
    // label: "Your Progress", //which is undefined??
    datasets: [{
      backgroundColor: 'rgba(247, 180, 92)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: weightHistory,
      label: "Your Progress"
    }]
  }

  return (
    <div id="userChart">
      <Line
        data={chartData}
        options={{
          maintainAspectRatio: true,
          scales: {
            x: {
                type: 'category',
                labels: date
            }
          },
          
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                    size: 30
                    }
                }
            }
          }
        
    
        }}
      />
    </div>
  );
}


export default BarChart;