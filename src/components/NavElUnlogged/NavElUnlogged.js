import "./NavElUnlogged.scss";
import { Link } from "react-router-dom";

function NavElUnlogged() {
  return (
    <>
      <Link className="nav-el nav-el__signup opacity" to="/signup">
        Регистрация
      </Link>
      <Link className="nav-el nav-el__signin opacity" to="/signin">
        Войти
      </Link>
    </>
  );
}

export default NavElUnlogged;
