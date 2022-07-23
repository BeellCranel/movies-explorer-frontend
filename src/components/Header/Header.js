import "./Header.scss";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

function Header({ onOpen }) {
  return (
    <header className="header">
      <Logo />
      <NavBar onOpen={onOpen} />
    </header>
  );
}

export default Header;
