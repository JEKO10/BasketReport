import { useGlobalContext } from "./context";

function App() {
  const { data } = useGlobalContext();

  console.log(data);

  return (
    <div className="App">
      {/* {data.map((item) => {
        return (
          <h1>
            {item.first_name} {item.last_name}
          </h1>
        );
      })} */}
    </div>
  );
}

export default App;
