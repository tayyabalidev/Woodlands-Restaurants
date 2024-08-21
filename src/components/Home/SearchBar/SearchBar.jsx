import React from "react";
import "./SearchBar.css";
import { Search } from "@material-ui/icons";
const SearchBar = ({ value, changeInput }) => (
  <div className="searchBar-wrap">
    <Search className="searchBar-icon" />
    <input
      type="text"
      placeholder="Woodland Hills"
      value={value}
      onChange={changeInput}
    />
  </div>
);

export default SearchBar;
