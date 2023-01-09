import React from "react";
import { useGlobalContext } from "../context";

function Players() {
  const { data } = useGlobalContext();
  console.log(data);

  return (
    <section className="mainSection">
      {data?.data?.map((player) => {
        return (
          <div key={player.id}>
            <h1>
              {player.first_name} {player.last_name}
            </h1>
            <h2>Position: {player.position}</h2>
            <h2>
              Team: {player.team.full_name} ({player.team.abbreviation})
            </h2>
          </div>
        );
      })}
    </section>
  );
}

export default Players;
