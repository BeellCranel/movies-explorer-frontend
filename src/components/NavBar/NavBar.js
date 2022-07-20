import "./NavBar.scss";
import { Routes, Route } from "react-router-dom";
import NavEl from "../NavEl/NavEl";
import NavElUnlogged from "../NavElUnlogged/NavElUnlogged";

function NavBar() {
  return (
    <nav className="nav-bar">
      <Routes>
        <Route index element={<NavElUnlogged />} />
        <Route path="movies" element={<NavEl />} />
        <Route path="saved-movies" element={<NavEl />} />
        <Route path="profile" element={<NavEl />} />
      </Routes>
    </nav>
  );
}

export default NavBar;
