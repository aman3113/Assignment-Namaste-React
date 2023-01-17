import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { BsFillMoonFill } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import ThemeContext from "../../Components/ThemeContext";
// redux components import
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../Redux/userSlice";

export default Header = () => {
  const userDetails = useSelector((store) => store.user);
  const dispatch = useDispatch();
  console.log(userDetails);
  const { theme, setTheme } = useContext(ThemeContext);

  function handleUserLogin() {
    dispatch(
      login({
        name: "Aman",
        id: "aman3113",
      })
    );
    console.log("clicked");
  }
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
        <p className="user-login" onClick={handleUserLogin}>
          LOGIN
        </p>
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
