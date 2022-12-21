import "./searchBar.css";
import { useState } from "react";

export default SearchComponent = (props) => {
  //
  const [searchInput, setSearchInput] = useState("");
  //
  const { userData, setTeamData } = props;
  //
  const searchedData = userData.filter((member) => {
    console.log(member.developerName.toLowerCase().includes(searchInput));
    return member.developerName.toLowerCase().includes(searchInput);
  });

  function handleChange(e) {
    setSearchInput(() => e.target.value.toLowerCase());
    console.log(searchInput);
  }

  function handleKeyUp(e) {
    if (searchedData.length > 0) {
      setTeamData(() => searchedData);
    } else {
      setTeamData(() => userData);
    }
  }
  console.log(searchedData);

  return (
    <div className="search-bar">
      <input
        type="search"
        id="search-input"
        name="searchInput"
        value={searchInput}
        placeholder="search here"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};
