import { FaUser } from "react-icons/fa";
import "./header.css";

export default Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://lwfiles.mycourse.app/635a5db526fa77c557bab00d-public/c4377b05799f40987f16cacd43da014d.png"
          alt="image"
        />
      </div>
      <div className="team-name">
        <h1>STORM TROOPERS</h1>
      </div>

      <div className="user-icon">
        <FaUser className="user-fa" />
      </div>
    </div>
  );
};
