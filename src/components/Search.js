import React from "react";

export const Search = ({ searchValue, onChangeSearchHandler, search }) => {
  return (
    <div className="search">
      <input
        type="number"
        placeholder="Type Page Number"
        value={searchValue}
        onChange={e => onChangeSearchHandler(e)}
        className="searchTerm"
      />
      <button onClick={search} className="searchButton">
        <i className="fa fa-search" />
      </button>
    </div>
  );
};
