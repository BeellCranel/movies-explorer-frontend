import "./Header.scss";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

function Header({ onOpen, isLogged }) {
  return (
    <header className="header">
      <Logo />
      <NavBar onOpen={onOpen} isLogged={isLogged} />
    </header>
  );
}

export default Header;
