import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

const News: React.FC = () => {
  const { news, setTeamNews, setSource, setPlayerNews, setQuery, isLoading } =
    useGlobalContext();

  useEffect(() => {
    setQuery("season_averages");
  }, []);

  return (
    <section className="news">
      <article className="filter">
        <input
          type="text"
          name="player"
          placeholder="Filter by player"
          onChange={(e) => {
            setPlayerNews(e.target.value);
          }}
        />
        <input
          type="text"
          name="team"
          placeholder="Filter by team"
          onChange={(e) => {
            setTeamNews(e.target.value);
          }}
        />
        <input
          type="text"
          name="source"
          placeholder="Filter by source"
          onChange={(e) => {
            setSource(e.target.value);
          }}
        />
      </article>
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        <article className="newsContainer">
          {news.map((item: any) => (
            <div key={item.url}>
              <h1>{item.title}</h1>
              <div>
                <h2>
                  Source: <span>{item.source}</span>
                </h2>
                <a href={item.url} target="_blank" rel="noreferrer noopener">
                  Read more
                </a>
              </div>
            </div>
          ))}
        </article>
      )}
    </section>
  );
};

export default News;
