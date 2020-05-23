import React from "react";
import DataCard from "./../dataCard/DataCard";
import "./first-section.css";

function FirstSection(props) {
  return (
    <div className="card-container">
      <DataCard
        type="total-cases"
        totalNumber={props.cases.TotalConfirmed}
        newCases={props.cases.NewConfirmed}
      />
      <DataCard
        type="death"
        totalNumber={props.cases.TotalDeaths}
        newCases={props.cases.NewDeaths}
      />
      <DataCard
        type="recovered"
        totalNumber={props.cases.TotalRecovered}
        newCases={props.cases.TotalRecovered}
      />
    </div>
  );
}

export default FirstSection;
