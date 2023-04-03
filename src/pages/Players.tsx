import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import Pagination from "../components/Pagination";
import PlayersImg from "../images/players.jpg";
import { IData } from "../types/contextTypes";

const Players: React.FC = () => {
  const { data, setSearch, setQuery, setPage, isLoading } = useGlobalContext();

  useEffect(() => {
    setQuery("players");
    setPage(1);
  }, []);

  return (
    <section className="mainSection">
      <article className="filter">
        <input
          type="text"
          name="player"
          placeholder="Search player"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          style={{ margin: "0 auto" }}
        />
      </article>
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        <article className="container">
          {data?.data?.map((player: IData) => {
            return (
              <div key={player.id} className="single">
                <img src={PlayersImg} alt="Players" />
                <h1>
                  {player.first_name} {player.last_name}
                </h1>
                <div>
                  {player.position ? <h2>Position: {player.position}</h2> : ""}
                  {player.height_feet ? (
                    <h2>
                      Height: {player.height_feet}′ {player.height_inches}′′
                    </h2>
                  ) : (
                    ""
                  )}
                  <h2>
                    Team: {player?.team?.full_name} (
                    {player?.team?.abbreviation})
                  </h2>
                </div>
              </div>
            );
          })}
        </article>
      )}
      {!isLoading ? <Pagination /> : ""}
    </section>
  );
};

export default Players;
