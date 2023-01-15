import React from "react";
import { useGlobalContext } from "../context";

const Games: React.FC = () => {
  const { data, isLoading } = useGlobalContext();

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
    </section>
  );
};

export default Games;
