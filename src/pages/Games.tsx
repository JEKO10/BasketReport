import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import Pagination from "../components/Pagination";

const Games: React.FC = () => {
  const { data, setQuery, isLoading } = useGlobalContext();

  useEffect(() => {
    setQuery("games");
  }, []);

  return (
    <section>
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        <article className="mainSection">
          {data?.data?.map((game: any) => {
            return (
              <div key={game.id}>
                <h2>
                  {game.home_team?.full_name} {game.home_team_score}
                </h2>
                <h2>
                  {game.visitor_team?.full_name} {game.visitor_team_score}
                </h2>
                <h3>Date: {game?.date?.slice(0, 10)}</h3>
                <h3>Season: {game.season}</h3>
              </div>
            );
          })}
        </article>
      )}
      <Pagination />
    </section>
  );
};

export default Games;
