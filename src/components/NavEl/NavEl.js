import "./NavEl.scss";
import { Link } from "react-router-dom";

function NavEl() {
  return (
    <>
      <Link
        className="nav-el nav-el__movies nav-el__closing opacity"
        to="/movies"
      >
        Фильмы
      </Link>
      <Link
        className="nav-el nav-el__saved nav-el__closing opacity"
        to="/saved-movies"
      >
        Сохранённые фильмы
      </Link>
      <Link
        className="nav-el nav-el__account nav-el__closing opacity"
        to="/profile"
      >
        <div className="acc-icon" />
        Аккаунт
      </Link>
      <button className="nav-btn opacity" type="button" />
    </>
  );
}

export default NavEl;
