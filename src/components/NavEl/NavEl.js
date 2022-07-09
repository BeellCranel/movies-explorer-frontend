import "./NavEl.scss";
import { Link } from "react-router-dom";
import NavBTN from "../NavBTN/NavBTN";

function NavEl() {
  return (
    <>
      <Link
        className="nav-el nav-el__movies nav-el__closing"
        to="/movies"
      >
        Фильмы
      </Link>
      <Link
        className="nav-el nav-el__saved nav-el__closing"
        to="/saved-movies"
      >
        Сохранённые фильмы
      </Link>
      <Link
        className="nav-el nav-el__account nav-el__closing"
        to="/profile"
      >
        <div className="acc-icon"></div>
        Аккаунт
      </Link>
      <NavBTN />
    </>
  );
}

export default NavEl;
