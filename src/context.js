import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState();
  const [news, setNews] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("players");
  const [search, setSearch] = useState("");

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "689bdba840msh627580b0402dd16p1bbcc9jsn0188595ae046",
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

      const responseNews = await fetch(
        `https://nba-latest-news.p.rapidapi.com/articles`,
        options
      );
      const newsData = await responseNews.json();
      setNews(newsData);
      console.log(newsData);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ data, isLoading, page, setPage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
