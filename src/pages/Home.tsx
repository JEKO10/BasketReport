import React, { useEffect } from "react";
import Banner from "../images/lbj.jpg";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Home: React.FC = () => {
  const { setQuery } = useGlobalContext();

  useEffect(() => {
    setQuery("");
  }, []);

  return (
    <section className="home">
      <header>
        <img src={Banner} alt="Banner" />
        <ul className="headlines">
          <li id="head">Headlines</li>
          <li onClick={() => setQuery("players")}>
            <Link to="/players">Players</Link>
            <p>This page retrieves all players from all seasons.</p>
          </li>
          <li onClick={() => setQuery("teams")}>
            <Link to="/teams">Teams</Link>
            <p>This page retrieves all teams for the current season.</p>
          </li>
          <li onClick={() => setQuery("games")}>
            <Link to="/games">Games</Link>
            <p>Seasons are represented by the year they began.</p>
          </li>
          <li onClick={() => setQuery("season_averages")}>
            <Link to="/news">News</Link>
            <p>
              This page retrieves news from NBA. You can filter it by player,
              team and source.
            </p>
          </li>
          <li onClick={() => setQuery("stats")}>
            <Link to="/makeTeam">Make your team</Link>
          </li>
        </ul>
      </header>
    </section>
  );
};

export default Home;
