import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { MdFirstPage, MdLastPage } from "react-icons/md";
import newsImg from "../images/newsImg.jpg";
import { INews } from "../types/contextTypes";

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
    setPage(1);
  }, []);

  return (
    <section className="mainSection">
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
        <article className="container">
          {currentPageData.map((item: INews) => {
            const id = Math.floor(Math.random() * 1000000);

            return (
              <div key={id} className="single">
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
          <li className="prev" onClick={() => setPage(1)}>
            <MdFirstPage />
          </li>
          <li
            className="prev"
            onClick={() => {
              page === 1 ? setPage(pageNews.length) : setPage(page - 1);
            }}
          >
            <GrFormPrevious />
          </li>
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
          <li
            className="next"
            onClick={() => {
              page === pageNews.length ? setPage(1) : setPage(page + 1);
            }}
          >
            <GrFormNext />
          </li>
          <li className="next" onClick={() => setPage(pageNews.length)}>
            <MdLastPage />
          </li>
        </ul>
      ) : (
        ""
      )}
    </section>
  );
};

export default News;
