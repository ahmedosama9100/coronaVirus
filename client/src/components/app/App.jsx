import React, { useState } from "react";
import NavBar from "./../navigationBar/NavBar";
import FirstSection from "./../firstSection/FirstSection";
import Chart from "./../chart/Chart";
import Footer from "./../footer/Footer";
import "./initial-style.css";

function App() {
  const numbers = {
    NewConfirmed: 0,
    NewDeaths: 0,
    NewRecovered: 0,
    TotalConfirmed: 0,
    TotalDeaths: 0,
    TotalRecovered: 0
  };

  const [cases, setCases] = useState(numbers);
  fetch("https://api.covid19api.com/summary")
    .then(res => res.json())
    .then(data => {
      setCases(data.Global);
    });
  return (
    <React.Fragment>
      <NavBar />
      <FirstSection cases={cases} />
      <Chart cases={cases} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
