import "./Header.scss";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <header className="header">
      <Link className="logo" to="/" />
      <NavBar />
    </header>
  );
}

export default Header;
