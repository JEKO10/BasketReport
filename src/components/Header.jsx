import React from "react";
import Logo from "../images/logo.svg";

function Header() {
  return (
    <nav>
      <img src={Logo} alt="Logo" />
      <ul>
        <li>Players</li>
        <li>Teams</li>
        <li>Games</li>
        <li>Stats</li>
        <li>News</li>
      </ul>
    </nav>
  );
}

export default Header;
