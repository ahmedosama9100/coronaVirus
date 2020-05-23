import React from "react";
import "./data-card.css";

function DataCard() {
  return (
    <div className="card">
      <h1 className="total-numbers">19k</h1>
      <p className="new-cases">last update</p>
      <div className="color-bar"></div>
    </div>
  );
}

export default DataCard;
