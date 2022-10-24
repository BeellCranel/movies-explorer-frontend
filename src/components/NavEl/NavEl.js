import "./NavEl.scss";
import { NavLink } from "react-router-dom";

function NavEl({ onOpen }) {
  return (
    <>
      <NavLink
        className="nav-el nav-el__movies nav-el__closing opacity"
        style={({ isActive }) => ({
          color: isActive ? "#9f9e9c" : "white",
        })}
        to="/movies"
      >
        Фильмы
      </NavLink>
      <NavLink
        className="nav-el nav-el__saved nav-el__closing opacity"
        style={({ isActive }) => ({
          color: isActive ? "#9f9e9c" : "white",
        })}
        to="/saved-movies"
      >
        Сохранённые фильмы
      </NavLink>
      <NavLink
        className="nav-el nav-el__account nav-el__closing opacity"
        style={({ isActive }) => ({
          color: isActive ? "#9f9e9c" : "white",
        })}
        to="/profile"
      >
        <div className="acc-icon" />
        Аккаунт
      </NavLink>
      <button className="nav-btn opacity" type="button" onClick={onOpen} />
    </>
  );
}

export default NavEl;
