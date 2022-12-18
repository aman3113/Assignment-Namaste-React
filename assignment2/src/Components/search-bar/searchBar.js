import "./searchBar.css";
import { useState } from "react";

export default SearchComponent = (props) => {
  //
  const [searchInput, setSearchInput] = useState("");
  //
  const { userData, setTeamData } = props;
  //
  const searchedData = userData.filter((member) =>
    member.developerName.toLowerCase().includes(searchInput)
  );

  function handleChange(e) {
    setSearchInput(() => e.target.value);
    setTeamData(() => searchedData);
    console.log(searchInput);
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
    </div>
  );
};
