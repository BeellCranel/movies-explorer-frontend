import "./Logo.scss";
import { Link } from "react-router-dom";

function Logo({ resetErrors }) {
  return (
    <Link className="logo opacity" to="/" onClick={resetErrors} />
  );
}

export default Logo;
