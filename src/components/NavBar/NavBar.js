import "./NavBar.css";
import React from "react";
import { Route, NavLink } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu";

function NavBar() {
  return (
    <nav className="menu">
      <Route path="/">
        <NavLink className="menu__item menu__item_signup" to="/signup">
          Регистрация
        </NavLink>
        <NavLink className="menu__item menu__item_signin" to="/signin">
          Войти
        </NavLink>
      </Route>
      <Route path="/movies">
        <NavMenu />
      </Route>
      <Route path="/saved-movies">
        <NavMenu />
      </Route>
      <Route path="/profile">
        <NavMenu />
      </Route>
    </nav>
  );
}

export default NavBar;
