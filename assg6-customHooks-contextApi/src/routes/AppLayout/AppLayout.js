import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./headerComponent";
import Footer from "./Footer.js";
import ThemeContext from "../../Components/ThemeContext";
export default function AppLayout() {
  const [theme, setTheme] = useState("light");
  return (
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
  );
}
