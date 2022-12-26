import { useContext, createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("players");
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://www.balldontlie.io/api/v1/${query}?page=${page}&search=${search}`
      );
      const data = await response.json();
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ data, isLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
