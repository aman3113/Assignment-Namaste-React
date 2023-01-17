import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./headerComponent";
import Footer from "./Footer.js";
import ThemeContext from "../../Components/ThemeContext";
// redux
import { Provider } from "react-redux";
import Store from "../../Redux/Store";

export default function AppLayout() {
  const [theme, setTheme] = useState("light");
  return (
    <Provider store={Store}>
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        <div
          className="body"
          data-theme={`${theme === "light" ? "light" : "dark"}`}
        >
          <Header />
          <Outlet />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </Provider>
  );
}
