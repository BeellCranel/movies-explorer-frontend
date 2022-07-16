import "./Logo.scss";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link className="logo opacity" to="/" />
  );
}

export default Logo;
