import "./NavBar.scss";
import { Routes, Route } from "react-router-dom";
import NavEl from "../NavEl/NavEl";
import NavElUnlogged from "../NavElUnlogged/NavElUnlogged";

function NavBar({ onOpen }) {
  return (
    <nav className="nav-bar">
      <Routes>
        <Route index element={<NavElUnlogged />} />
        <Route path="movies" element={<NavEl onOpen={onOpen} />} />
        <Route path="saved-movies" element={<NavEl onOpen={onOpen} />} />
        <Route path="profile" element={<NavEl onOpen={onOpen} />} />
      </Routes>
    </nav>
  );
}

export default NavBar;
