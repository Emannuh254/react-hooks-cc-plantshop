import React, { useState } from "react";

function Search({ onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchChange(e) {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value); // pass upd value to parent app.js
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
