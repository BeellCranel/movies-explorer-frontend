import "./NavMenu.css";
import React from "react";
import { NavLink } from "react-router-dom";

function NavMenu() {
  return (
    <>
      <NavLink
        className="menu__item menu__item_movies menu__item_closing"
        to="/movies"
      >
        Фильмы
      </NavLink>
      <NavLink
        className="menu__item menu__item_saved menu__item_closing"
        to="/saved-movies"
      >
        Сохранённые фильмы
      </NavLink>
      <NavLink
        className="menu__item menu__item_account menu__item_closing"
        to="/profile"
      >
        Аккаунт
      </NavLink>
      <button className="buttonClassName" type="button" />
    </>
  );
}

export default NavMenu;
