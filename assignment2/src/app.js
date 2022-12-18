import Header from "./Components/header component/headerComponent.js";
import Body from "./Components/bodyComponent/bodyComponent.js";
import SearchBar from "./Components/search-bar/searchBar.js";
import "./app.css";

export default App = () => (
  <>
    <div className="fixed">
      <Header />
      <SearchBar />
    </div>
    <Body />
  </>
);
