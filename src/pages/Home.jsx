import React from "react";
import Banner from "../images/banner.png";

function Home() {
  return (
    <section className="home">
      <header>
        <img src={Banner} alt="Banner" />
        <ul className="headlines">
          <li>Games</li>
          <li>News</li>
          <li>Players</li>
          <li>Stats</li>
          <li>Teams</li>
        </ul>
      </header>
    </section>
  );
}

export default Home;
