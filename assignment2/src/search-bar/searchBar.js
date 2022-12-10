import "./searchBar.css";
import { useState } from "react";

export default SearchComponent = (e) => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="search-bar">
      <input
        type="search"
        id="search-input"
        value={searchInput}
        placeholder="search here"
      />
      <button id="search-btn" onClick={console.log(e.target)}>
        Search
      </button>
    </div>
  );
};
