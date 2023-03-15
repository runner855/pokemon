import * as React from "react";
import "../SearchBar/SearchBar.css";

export const SearchBar = () => {
  return (
    <div className="SearchBar_container">
      <input type="search" placeholder="Search Pokemon,Moves,Ability etc" />
    </div>
  );
};
