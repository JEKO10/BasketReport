import React from "react";
import { useGlobalContext } from "../context";

function Teams() {
  const { data, isLoading } = useGlobalContext();

  return (
    <>
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        <section className="mainSection">
          {data?.data?.map((team) => {
            return (
              <div key={team.id}>
                <h2>
                  Full name: {team.full_name} ({team.abbreviation})
                </h2>
                <h3>City: {team.city}</h3>
                <h3>Conference: {team.conference}</h3>
                <h3>Division: {team.division}</h3>
              </div>
            );
          })}
        </section>
      )}
    </>
  );
}

export default Teams;
