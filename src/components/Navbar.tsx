import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <ul>
        <Link to="/pl">
          <img src={logo} alt="Logo" />
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
