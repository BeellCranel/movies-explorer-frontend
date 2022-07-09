import "./NavBar.scss";
import { Routes, Route } from "react-router-dom";
import NavEl from "../NavEl/NavEl";
import NavElUnlogged from "../NavElUnlogged/NavElUnlogged";

function NavBar() {
  return (
    <nav className="nav-bar">
      <Routes>
        <Route path="/" element={<NavElUnlogged />} />
      </Routes>
    </nav>
  );
}

export default NavBar;
