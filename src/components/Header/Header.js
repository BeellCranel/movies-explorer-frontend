import "./Header.scss";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <header className="header">
      <Logo />
      <NavBar />
    </header>
  );
}

export default Header;
