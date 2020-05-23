import React from "react";
import { Bar } from "react-chartjs-2";
import "./chart.css";

function Chart(props) {
  const data = {
    labels: ["All Cases", "Death", "Recovered"],
    datasets: [
      {
        backgroundColor: ["#D49C08", "#CC4239", "#2DBD02"],
        borderColor: ["#D49C08", "#CC4239", "#2DBD02"],
        data: [
          props.cases.TotalConfirmed,
          props.cases.TotalDeaths,
          props.cases.TotalRecovered
        ]
      }
    ]
  };
  const options = {
    maintainAspectRatio: false,
    scaleBeginAtZero: true,
    legend: {
      display: false
    }
  };
  return (
    <div className="chart">
      <Bar data={data} options={options} />
    </div>
  );
}

export default Chart;
