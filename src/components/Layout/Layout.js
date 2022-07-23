import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function Layout({ onOpen }) {
  return (
    <>
      <Header onOpen={onOpen} />
      <Outlet />
    </>
  );
}

export default Layout;
