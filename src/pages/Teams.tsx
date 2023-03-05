import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import TeamsImg from "../images/teams.png";

const Teams: React.FC = () => {
  const { data, setQuery, isLoading } = useGlobalContext();

  useEffect(() => {
    setQuery("teams");
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        <section className="mainSection">
          <article className="container">
            {data?.data?.map((team: any) => {
              return (
                <div key={team.id} className="single">
                  <img src={TeamsImg} alt="TeamsImg" />
                  <div>
                    <h2>
                      Full name: {team.full_name} ({team.abbreviation})
                    </h2>
                    <h3>City: {team.city}</h3>
                    <h3>Conference: {team.conference}</h3>
                    <h3>Division: {team.division}</h3>
                  </div>
                </div>
              );
            })}
          </article>
        </section>
      )}
    </>
  );
};

export default Teams;
