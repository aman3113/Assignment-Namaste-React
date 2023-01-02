import Body from "../Components/bodyComponent/bodyComponent.js";
import SearchBar from "../Components/search-bar/searchBar.js";
import PageNotFound from "./AppLayout/PageNotFound";
import "./app.css";
import { getDevelopers } from "../Data/SharedFunctions.js";
import { useState, useEffect } from "react";

export default App = () => {
  const [userData, setUserData] = useState([]);
  //
  const [filteredData, setFilteredData] = useState([]);
  //
  const [matchFound, setMatchFound] = useState(true);
  useEffect(() => {
    async function getData() {
      await getDevelopers();
      setUserData(JSON.parse(sessionStorage.getItem("developerArray")));
    }

    getData();
  }, []);

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
        <PageNotFound />
      )}
    </>
  );
};
