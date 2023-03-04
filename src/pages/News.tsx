import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import newsImg from "../images/newsImg.jpg";

const News: React.FC = () => {
  const {
    news,
    page,
    setPage,
    setTeamNews,
    setSource,
    setPlayerNews,
    setQuery,
    isLoading,
  } = useGlobalContext();
  const pageNews = [];
  const offset = page * 9;
  const currentPageData = news.slice(offset, offset + 12);

  for (let i = 1; i < Math.ceil(news.length / 12); i++) {
    pageNews.push(i);
  }

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
          {currentPageData.map((item: any) => {
            const id = Math.floor(Math.random() * 1000000);

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
      {!isLoading ? (
        <ul className="pagination">
          {pageNews.map((pageNumber) => (
            <li
              className={page === pageNumber ? "active" : ""}
              key={pageNumber}
              value={pageNumber}
              onClick={(e) => setPage(e.currentTarget.value)}
            >
              {pageNumber}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </section>
  );
};

export default News;
