import { FaUser } from "react-icons/fa";
import SearchComponent from "../search-bar/searchBar.js";
import "./header.css";

export default Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://thumbs.dreamstime.com/b/infinity-sign-two-hands-touching-each-other-infinite-frien-friendship-concept-forever-friends-vector-creative-logo-88350734.jpg"
          alt="image"
        />
      </div>
      <div className="search-component">
        <SearchComponent />
      </div>

      <div className="user-icon">
        <FaUser className="user-fa" />
      </div>
    </div>
  );
};
