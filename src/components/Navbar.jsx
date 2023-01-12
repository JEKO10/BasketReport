import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";
import { useGlobalContext } from "../context";

function Navbar() {
  const { query, setQuery } = useGlobalContext();

  return (
    <nav>
      <Link to="/" onClick={() => setQuery("")}>
        <img src={Logo} alt="Logo" />
      </Link>
      <ul>
        <li>
          <Link
            to="/players"
            className={query === "players" ? "active" : ""}
            onClick={() => setQuery("players")}
          >
            Players
          </Link>
        </li>
        <li>
          <Link
            to="/teams"
            className={query === "teams" ? "active" : ""}
            onClick={() => setQuery("teams")}
          >
            Teams
          </Link>
        </li>
        <li>
          <Link
            to="/games"
            className={query === "games" ? "active" : ""}
            onClick={() => setQuery("games")}
          >
            Games
          </Link>
        </li>
        <li>
          <Link
            to="/news"
            className={query === "news" ? "active" : ""}
            onClick={() => setQuery("news")}
          >
            News
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
