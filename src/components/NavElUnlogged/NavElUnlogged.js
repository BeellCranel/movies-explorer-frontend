import "./NavElUnlogged.scss";
import { Link } from "react-router-dom";

function NavElUnlogged() {
  return (
    <>
      <Link className="menu__item menu__item_signup" to="/signup">
        Регистрация
      </Link>
      <Link className="menu__item menu__item_signin" to="/signin">
        Войти
      </Link>
    </>
  );
}

export default NavElUnlogged;
