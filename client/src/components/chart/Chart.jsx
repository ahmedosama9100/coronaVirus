import React from "react";
import { Bar } from "react-chartjs-2";
import "./chart.css";

function Chart() {
  const data = {
    labels: ["All Cases", "Death", "Recovered"],
    datasets: [
      {
        label: "stats",
        backgroundColor: ["#D49C08", "#CC4239", "#2DBD02"],
        borderColor: ["#D49C08", "#CC4239", "#2DBD02"],
        data: [1, 22, 33]
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
