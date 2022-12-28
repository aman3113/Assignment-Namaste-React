import { Outlet } from "react-router-dom";
import Header from "../Components/header component/headerComponent";
import Footer from "../Components/Footer.js";
export default function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
