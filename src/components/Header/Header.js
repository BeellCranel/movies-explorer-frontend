import "./Header.scss";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

function Header({ headerRef, onOpen, isLogged }) {
  return (
    <header ref={headerRef} className="header">
      <Logo />
      <NavBar onOpen={onOpen} isLogged={isLogged} />
    </header>
  );
}

export default Header;
