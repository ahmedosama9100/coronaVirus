import React from "react";
import DataCard from "./../dataCard/DataCard";
import "./first-section.css";

function FirstSection() {
  return (
    <div className="card-container">
      <DataCard />
      <DataCard />
      <DataCard />
    </div>
  );
}

export default FirstSection;
