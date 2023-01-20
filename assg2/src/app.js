import Header from "./Components/header component/headerComponent.js";
import Body from "./Components/bodyComponent/bodyComponent.js";
import SearchBar from "./Components/search-bar/searchBar.js";
import Footer from "./Components/Footer.js";
import "./app.css";
import userData from "./Data/userData.js";
import { useState } from "react";

export default App = () => {
  const [teamData, setTeamData] = useState(userData);
  return (
    <>
      <div className="fixed">
        <Header />
        <SearchBar userData={userData} setTeamData={setTeamData} />
      </div>
      <Body teamData={teamData} />
      <Footer />
    </>
  );
};
