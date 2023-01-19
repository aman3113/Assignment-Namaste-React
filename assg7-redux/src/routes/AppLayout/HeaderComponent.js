import { Link, Navigate } from "react-router-dom";
import { BsFillMoonFill } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
// Context
import { useContext } from "react";
import ThemeContext from "../../Components/ThemeContext";
// redux components import
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../Redux/userSlice";

export default Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const { details, isLoggedIn } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  function handleUserLogin() {
    if (isLoggedIn) {
      dispatch(logoutUser());
      <Navigate to={"/login"} replace />;
    } else {
      console.log("clicked");
      return <Navigate to={"/login"} replace />;
    }
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
          {isLoggedIn ? `Hello ${details.name} | Logout` : "Login"}
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
