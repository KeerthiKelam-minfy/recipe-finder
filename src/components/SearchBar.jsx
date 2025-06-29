import React from "react";
import "./styles/SearchBar.css";

const SearchBar = ({ query, setQuery, onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Recipes (e.g., Chicken)"
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
