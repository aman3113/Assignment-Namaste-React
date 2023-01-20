import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { BsFillMoonFill } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import ThemeContext from "../../Components/ThemeContext";

export default Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="header">
      <div className="team-logo">
        <img
          src="https://lwfiles.mycourse.app/635a5db526fa77c557bab00d-public/c4377b05799f40987f16cacd43da014d.png"
          alt="image"
        />
      </div>

      <div className="team-name">
        <h1>STORM TROOPERS</h1>
      </div>

      <div className="team-nav">
        <Link to={"/about-us"}>About US</Link>
        <Link to={"/"}>Home</Link>
        <div
          className="theme-logo"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <BsFillMoonFill className="theme-icon" size={"20"} />
          ) : (
            <MdOutlineLightMode className="theme-icon" size={"20"} />
          )}
        </div>
      </div>
    </div>
  );
};
