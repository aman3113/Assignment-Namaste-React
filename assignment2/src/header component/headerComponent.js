import { FaUser } from "react-icons/fa";
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
      <div className="search-bar">
        <input
          type="search"
          id="search-input"
          value={""}
          placeholder="search here"
        />
        <button id="search-btn">Search</button>
      </div>
      <div className="user-icon">
        <FaUser className="user-fa" />
      </div>
    </div>
  );
};
