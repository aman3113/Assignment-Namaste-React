import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./headerComponent";
import Footer from "./Footer.js";
import ThemeContext from "../../Components/ThemeContext";
export default function AppLayout() {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        <Header />
        <Outlet />
        <Footer />
      </ThemeContext.Provider>
    </>
  );
}
