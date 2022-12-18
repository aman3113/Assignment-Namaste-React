import "./searchBar.css";
import { useState } from "react";

export default SearchComponent = (e) => {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(e) {
    setSearchInput(e.target.value);
  }
  console.log(searchInput);

  return (
    <div className="search-bar">
      <input
        type="search"
        id="search-input"
        name="searchInput"
        value={searchInput}
        placeholder="search here"
        onChange={handleChange}
      />
      <button id="search-btn">Search</button>
    </div>
  );
};
