import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function Layout({ headerRef, onOpen, isLogged }) {
  return (
    <>
      <Header headerRef={headerRef} onOpen={onOpen} isLogged={isLogged} />
      <Outlet />
    </>
  );
}

export default Layout;
