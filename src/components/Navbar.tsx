import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";
import { useGlobalContext } from "../context";

const Navbar: React.FC = () => {
  const { query } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);

  const closeFixedMenu = () => {
    setIsOpen(false);
  };

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <nav>
      <div className="menuBtn" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "menuBurger open" : "menuBurger"}></span>
      </div>
      <Link to="/" onClick={() => closeFixedMenu()}>
        <img src={Logo} alt="Logo" />
      </Link>
      <ul className={!isOpen ? "hide" : ""}>
        <li onClick={() => closeFixedMenu()}>
          <Link to="/players" className={query === "players" ? "active" : ""}>
            Players
          </Link>
        </li>
        <li onClick={() => closeFixedMenu()}>
          <Link to="/teams" className={query === "teams" ? "active" : ""}>
            Teams
          </Link>
        </li>
        <li onClick={() => closeFixedMenu()}>
          <Link to="/games" className={query === "games" ? "active" : ""}>
            Games
          </Link>
        </li>
        <li onClick={() => closeFixedMenu()}>
          <Link
            to="/news"
            className={query === "season_averages" ? "active" : ""}
          >
            News
          </Link>
        </li>
        <li onClick={() => closeFixedMenu()}>
          <Link to="/makeTeam" className={query === "stats" ? "active" : ""}>
            Make your team
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
