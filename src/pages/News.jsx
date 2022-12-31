import React from "react";
import { useGlobalContext } from "../context";

function News() {
  const { news, setTeamNews, setSource, setPlayerNews, isLoading } =
    useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="news">
      <article className="filter">
        <input
          type="text"
          name="player"
          placeholder="Enter players name"
          onChange={(e) => {
            setPlayerNews(e.target.value);
          }}
        />
        <input
          type="text"
          name="team"
          placeholder="Enter team name"
          onChange={(e) => {
            setTeamNews(e.target.value);
          }}
        />
        <input
          type="text"
          name="source"
          placeholder="Enter source"
          onChange={(e) => {
            setSource(e.target.value);
          }}
        />
      </article>
      <article className="newsContainer">
        {news.map((item) => (
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
    </section>
  );
}

export default News;
