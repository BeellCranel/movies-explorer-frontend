import "./Header.css";
import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <header className="header">
      <NavLink className="logo" to="/" />
      <NavBar />
    </header>
  );
}

export default Header;
