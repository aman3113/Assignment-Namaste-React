import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to={"/"}>
          <img
            src="https://lwfiles.mycourse.app/635a5db526fa77c557bab00d-public/c4377b05799f40987f16cacd43da014d.png"
            alt="image"
          />
        </Link>
      </div>

      <div className="team-name">
        <Link to={"/"}>
          <h1>STORM TROOPERS</h1>
        </Link>
      </div>

      <div className="user-icon">
        <Link to={"/about-us"}>
          <FaUser className="user-fa" />
        </Link>
      </div>
    </div>
  );
};
