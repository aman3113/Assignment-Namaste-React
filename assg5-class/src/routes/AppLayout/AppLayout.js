import { Outlet } from "react-router-dom";
import Header from "./headerComponent";
import Footer from "./Footer.js";
export default function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
