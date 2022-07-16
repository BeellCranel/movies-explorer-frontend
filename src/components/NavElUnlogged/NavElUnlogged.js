import "./NavElUnlogged.scss";
import { Link } from "react-router-dom";

function NavElUnlogged() {
  return (
    <>
      <Link className="nav-el nav-el__signup opacity" to="/sign-up">
        Регистрация
      </Link>
      <Link className="nav-el nav-el__signin opacity" to="/sign-in">
        Войти
      </Link>
    </>
  );
}

export default NavElUnlogged;
