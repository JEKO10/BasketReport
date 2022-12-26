import { useGlobalContext } from "./context";
import Paginate from "./components/Paginate";

function App() {
  const { data, isLoading } = useGlobalContext();
  console.log(data);

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <div className="App">
      {data.data.map((item) => {
        return (
          <h1 key={item.id}>
            {item.first_name} {item.last_name}
          </h1>
        );
      })}
      <Paginate />
    </div>
  );
}

export default App;
