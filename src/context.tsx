import React, {
  useContext,
  PropsWithChildren,
  createContext,
  useState,
  useEffect,
} from "react";

interface IAppContext {
  data: any;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  isLoading: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  news: any;
  setTeamNews: React.Dispatch<React.SetStateAction<string>>;
  setSource: React.Dispatch<React.SetStateAction<string>>;
  setPlayerNews: React.Dispatch<React.SetStateAction<string>>;
  teamNews: string;
  source: string;
  playerNews: string;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<IAppContext>({} as IAppContext);

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState([]);
  const [news, setNews] = useState([]);
  const [teamNews, setTeamNews] = useState("");
  const [source, setSource] = useState("");
  const [playerNews, setPlayerNews] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("stats");
  const [search, setSearch] = useState("");

  const options: { method: string; headers: {} } = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "nba-latest-news.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://www.balldontlie.io/api/v1/${query}?page=${page}&per_page=${50}&search=${search}`
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  const fetchNews = async () => {
    setIsLoading(true);
    try {
      const responseNews = await fetch(
        `https://nba-latest-news.p.rapidapi.com/articles?team=${teamNews}&source=${source}&player=${playerNews}&limit=25`,
        options
      );
      const newsData = await responseNews.json();
      setNews(newsData);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [query, search, page]);

  // useEffect(() => {
  // fetchNews();
  // }, [news, teamNews, playerNews, source]);

  return (
    <AppContext.Provider
      value={{
        data,
        setSearch,
        search,
        isLoading,
        page,
        setPage,
        news,
        setTeamNews,
        setSource,
        setPlayerNews,
        teamNews,
        source,
        playerNews,
        query,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
