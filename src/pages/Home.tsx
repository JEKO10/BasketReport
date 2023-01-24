import React from "react";
import Banner from "../images/lbj.jpg";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <section className="home">
      <header>
        <img src={Banner} alt="Banner" />
        <ul className="headlines">
          <li id="head">Headlines</li>
          <li>
            <Link to="/players">Players</Link>
            <p>This page retrieves all players from all seasons.</p>
          </li>
          <li>
            <Link to="/teams">Teams</Link>
            <p>This page retrieves all teams for the current season.</p>
          </li>
          <li>
            <Link to="/games">Games</Link>
            <p>Seasons are represented by the year they began.</p>
          </li>
          <li>
            <Link to="/stats">Stats</Link>
            <p>This page retrieves all stats.</p>
          </li>
          <li>
            <Link to="/news">News</Link>
            <p>
              This page retrieves news from NBA. You can filter it by player,
              team and source.
            </p>
          </li>
        </ul>
      </header>
    </section>
  );
};

export default Home;
