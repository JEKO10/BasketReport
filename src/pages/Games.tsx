import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import Pagination from "../components/Pagination";
import GamesImg from "../images/games.jpg";

const Games: React.FC = () => {
  const { data, setPage, setQuery, isLoading } = useGlobalContext();

  useEffect(() => {
    setQuery("games");
    setPage(1);
  }, []);

  return (
    <section className="mainSection">
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        <article className="container">
          {data?.data?.map((game: any) => {
            return (
              <div key={game.id} className="single">
                <img src={GamesImg} alt="GamesImg" />
                <div>
                  <h2>
                    {game.home_team?.full_name} {game.home_team_score}
                  </h2>
                  <h2>
                    {game.visitor_team?.full_name} {game.visitor_team_score}
                  </h2>
                  <h3>Date: {game?.date?.slice(0, 10)}</h3>
                  <h3>Season: {game.season}</h3>
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

export default Games;
