import React from "react";
import NavBar from "./../navigationBar/NavBar";
import FirstSection from "./../firstSection/FirstSection";
import Chart from "./../chart/Chart";
import Footer from "./../footer/Footer";
import "./initial-style.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <FirstSection />
      <Chart />
      <Footer />
    </React.Fragment>
  );
}

export default App;
