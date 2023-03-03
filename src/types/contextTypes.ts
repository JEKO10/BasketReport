interface IData {
  id: number;
  first_name: string;
  height_feet: number;
  height_inches: number;
  last_name: string;
  position: string;
  team: {
    abbreviation: string;
    full_name: string;
  };
  abbreviation: string;
  full_name: string;
  city: string;
  conference: string;
  division: string;
  season: string;
  date: string;
  home_team: {
    full_name: string;
  };
  home_team_score: number;
  visitor_team: {
    full_name: string;
  };
  visitor_team_score: number;
}

interface IMeta {
  current_page: number;
  next_page: number;
  per_page: number;
  total_count: number;
  total_pages: number;
}

export interface IAPIData {
  data: Partial<IData[]>;
  meta: IMeta;
}

interface INews {
  source: string;
  title: string;
  url: string;
}

export interface IAppContext {
  data: IAPIData;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  isLoading: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  perPage: number;
  setPerPage: React.Dispatch<React.SetStateAction<number>>;
  news: INews[];
  setTeamNews: React.Dispatch<React.SetStateAction<string>>;
  setSource: React.Dispatch<React.SetStateAction<string>>;
  setPlayerNews: React.Dispatch<React.SetStateAction<string>>;
  teamNews: string;
  source: string;
  playerNews: string;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
