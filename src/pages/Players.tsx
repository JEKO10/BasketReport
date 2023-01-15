import React from "react";
import { useGlobalContext } from "../context";

const Players: React.FC = () => {
  const { data, setSearch, isLoading } = useGlobalContext();

  return (
    <section>
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
        <article className="mainSection">
          {data?.data?.map((player: any) => {
            return (
              <div key={player.id}>
                <h2>
                  {player.first_name} {player.last_name}
                </h2>
                <h2>Position: {player.position}</h2>
                {player.height_feet ? (
                  <h2>
                    Height: {player.height_feet}′ {player.height_inches}′′
                  </h2>
                ) : (
                  ""
                )}
                <h2>
                  Team: {player?.team?.full_name} ({player?.team?.abbreviation})
                </h2>
              </div>
            );
          })}
        </article>
      )}
    </section>
  );
};

export default Players;
