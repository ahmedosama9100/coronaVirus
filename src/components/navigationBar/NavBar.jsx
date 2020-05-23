import React, { useState } from "react";
import "./nav-bar.css";

function NavBar(props) {
  const [searchValue, setSearchValue] = useState("");

  function handleSubmit(e) {
    props.getSearchValue(searchValue);
    e.preventDefault();
  }

  function updateValue(e) {
    setSearchValue(e.target.value);
  }

  return (
    <div className="navigation-bar">
      <img
        src={require("./virus.png")}
        alt="covid 19 virus icon"
        className="covid19-icon"
      />
      <form method="get" onSubmit={handleSubmit}>
        <div className="search-bar">
          <button type="submit" className="fas fa-search search-icon"></button>
          <input
            type="text"
            name="searchField"
            className="search-field"
            placeholder="Country"
            value={searchValue}
            onChange={updateValue}
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </form>
    </div>
  );
}

export default NavBar;
