import React from "react";
import "./data-card.css";

function DataCard(props) {
  return (
    <div className="card">
      <h1>{props.type}</h1>
      <h1 className="total-numbers">{props.totalNumber.toLocaleString()}</h1>
      <p className="new-cases">New Cases</p>
      <p className="new-cases">{props.newCases.toLocaleString()}</p>
      <div className={props.type}></div>
    </div>
  );
}

export default DataCard;
