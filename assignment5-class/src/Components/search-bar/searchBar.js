import "./searchBar.css";
import { useState } from "react";

export default SearchComponent = (props) => {
  //
  const [searchInput, setSearchInput] = useState("");
  //
  const { userData, setFilteredData, setMatchFound } = props;
  //
  const searchedData = userData?.filter((member) => {
    return member?.name?.toLowerCase().includes(searchInput);
  });

  function handleChange(e) {
    setSearchInput(() => e.target.value.toLowerCase());
  }

  function handleKeyUp(e) {
    e.preventDefault();
    if (searchedData.length > 0) {
      setFilteredData(() => searchedData);
      setMatchFound(true);
    } else {
      setMatchFound(false);
    }
  }

  return (
    <form className="search-bar" onSubmit={handleKeyUp}>
      <input
        type="search"
        id="search-input"
        name="searchInput"
        value={searchInput}
        placeholder="search here"
        onChange={handleChange}
      />
    </form>
  );
};
