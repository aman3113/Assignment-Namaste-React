import Header from "./Components/header component/headerComponent.js";
import Body from "./Components/bodyComponent/bodyComponent.js";
import SearchBar from "./Components/search-bar/searchBar.js";
import Footer from "./Components/Footer.js";
import "./app.css";
import searchData from "./Data/userData.js";
import { useState, useEffect } from "react";

export default App = () => {
  const [userData, setUserData] = useState([]);
  //
  const [teamData, setTeamData] = useState([]);
  //
  useEffect(() => {
    getDevelopers();
  }, []);

  function getDevelopers() {
    const developerArray = [];
    searchData.forEach((data) =>
      fetch(`https://api.github.com/users/${data.github_login}`)
        .then((res) => res.json())
        .then((data) => {
          developerArray.push(data);
        })
    );
    setUserData(developerArray);
  }

  console.log(userData);

  return (
    <>
      <Header />
      <SearchBar userData={userData} setTeamData={setTeamData} />

      {teamData.length > 0 ? (
        <Body teamData={teamData} />
      ) : (
        <Body teamData={userData} />
      )}

      <Footer />
    </>
  );
};
