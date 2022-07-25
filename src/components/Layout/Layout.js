import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function Layout({ onOpen, isLogged }) {
  return (
    <>
      <Header onOpen={onOpen} isLogged={isLogged} />
      <Outlet />
    </>
  );
}

export default Layout;
