import React, { Component } from 'react';
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';

const state = {
  labels: ["date1", "date2", "date3", "date4", "date5", "date6","date7"],
  datasets: [
    {
      label: "Your Progress",
      // height: {300} ,
      // width: {400} ,
      backgroundColor: "rgba(247, 180, 92)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [118, 117, 115, 114, 113, 112, 115],
    },
  ],
};

class BarChart extends React.Component {
  
  render() {
    return (
      <div>
        <Line
          data={state}
          options={{
            maintainAspectRatio: true,
          }}
        />
      </div>
    );
  }
}


export default BarChart;


