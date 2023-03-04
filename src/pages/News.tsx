import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import newsImg from "../images/newsImg.jpg";

const News: React.FC = () => {
  const { news, setTeamNews, setSource, setPlayerNews, setQuery, isLoading } =
    useGlobalContext();
  console.log(news.length);

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
      ) : news.length > 3 ? (
        <article className="newsContainer">
          {news.map((item: any) => {
            const id = Math.floor(Math.random() * 10000 + 1);

            return (
              <div key={id} className="singleNew">
                <img src={newsImg} alt="newsImg" />
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
            );
          })}
        </article>
      ) : (
        <h2 id="error">
          There is no news! Please try something else or try later.
        </h2>
      )}
    </section>
  );
};

export default News;
