import React from "react";

function Search({ onChange, value }) {
  return (
    <input
      className="input__search__filter"
      type="text"
      onChange={onChange}
      value={value}
      placeholder="Search"
    />
  );
}

export default Search;
