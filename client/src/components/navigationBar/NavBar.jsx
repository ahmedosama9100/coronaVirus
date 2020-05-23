import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./nav-bar.css";

function NavBar() {
  function showSearch() {}
  return (
    <div className="navigation-bar">
      <img
        src={require("./virus.png")}
        alt="covid 19 virus icon"
        className="covid19-icon"
      />
      <form method="get" >
        <div className="search-bar">
          <button type="submit" className="fas fa-search search-icon"></button>
          <input
            type="text"
            name="searchField"
            className="search-field"
            placeholder="Country"
          />
        </div>
      </form>
    </div>
  );
}

export default NavBar;
