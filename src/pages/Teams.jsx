import React from "react";
import { useGlobalContext } from "../context";

function Teams() {
  const { data } = useGlobalContext();
  console.log(data);

  return (
    <section className="mainSection">
      {data?.data?.map((team) => {
        return (
          <div key={team.id}>
            <h1>
              Full name: {team.full_name} ({team.abbreviation})
            </h1>
            <h2>City: {team.city}</h2>
            <h2>Conference: {team.conference}</h2>
            <h2>Division: {team.division}</h2>
          </div>
        );
      })}
    </section>
  );
}

export default Teams;
