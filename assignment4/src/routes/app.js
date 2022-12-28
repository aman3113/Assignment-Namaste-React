import Body from "../Components/bodyComponent/bodyComponent.js";
import SearchBar from "../Components/search-bar/searchBar.js";
import Page from "../Components/PageNotFound.js";
import "./app.css";
import searchData from "../Data/userData.js";
import { useState, useEffect } from "react";

export default App = () => {
  const [userData, setUserData] = useState([]);
  //
  const [filteredData, setFilteredData] = useState([]);
  //
  const [matchFound, setMatchFound] = useState(true);
  useEffect(() => {
    getDevelopers();
  }, []);

  async function getDevelopers() {
    const developerArray = [];

    for (let data of searchData) {
      const resp = await fetch(
        `https://api.github.com/users/${data.github_login}`
      );
      const Json = await resp.json();
      developerArray.push(Json);
    }
    sessionStorage.setItem("developerArray", JSON.stringify(developerArray));
    setUserData(JSON.parse(sessionStorage.getItem("developerArray")));
  }

  return (
    <>
      <SearchBar
        userData={userData}
        setFilteredData={setFilteredData}
        setMatchFound={setMatchFound}
      />

      {matchFound ? (
        filteredData.length > 0 ? (
          <Body filteredData={filteredData} />
        ) : (
          <Body filteredData={userData} />
        )
      ) : (
        <Page />
      )}
    </>
  );
};
