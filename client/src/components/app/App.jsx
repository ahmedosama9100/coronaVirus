import React from "react";
import NavBar from "./../navigationBar/NavBar";
import FirstSection from "./../firstSection/FirstSection";
import Chart from "./../chart/Chart";
import "./initial-style.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <FirstSection />
      <Chart id="myChart" />
    </React.Fragment>
  );
}

export default App;
