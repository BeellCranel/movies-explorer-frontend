import "./Layout.scss";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function Layout() {
  return (
    <>
      <header className="header">
        <Link className="logo" to="/" />
        <NavBar />
      </header>

      <Outlet />
    </>
  );
}

export default Layout;
