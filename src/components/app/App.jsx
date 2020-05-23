import React, { useState } from "react";
import _ from "lodash";
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
  const [searchData, setSearchData] = useState("");

  function getSearchValue(searchValue) {
    setSearchData(_.kebabCase(searchValue));
  }
  fetch("https://api.covid19api.com/summary")
    .then(res => res.json())
    .then(data => {
      if (searchData === "") {
        document.title = "Covid-19 | Global";
        setCases(data.Global);
      } else {
        let countries = data.Countries;
        countries.forEach(country => {
          if (country.Slug === searchData) {
            document.title = "Covid-19 | " + searchData;
            setCases(country);
          }
        });
      }
    });
  return (
    <React.Fragment>
      <NavBar getSearchValue={getSearchValue} />
      <FirstSection cases={cases} />
      <Chart cases={cases} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
