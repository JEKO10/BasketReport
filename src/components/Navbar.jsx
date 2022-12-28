import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";
import { useGlobalContext } from "../context";

function Navbar() {
  const { query } = useGlobalContext();

  return (
    <nav>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <ul>
        <li>
          <Link to="/players" className={query === "players" ? "active" : ""}>
            Players
          </Link>
        </li>
        <li>
          <Link to="/teams" className={query === "teams" ? "active" : ""}>
            Teams
          </Link>
        </li>
        <li>
          <Link to="/games" className={query === "games" ? "active" : ""}>
            Games
          </Link>
        </li>
        <li>
          <Link to="/stats" className={query === "stats" ? "active" : ""}>
            Stats
          </Link>
        </li>
        <li>
          <Link to="/news" className={query === "news" ? "active" : ""}>
            News
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
