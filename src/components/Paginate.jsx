import { useGlobalContext } from "../context";

function Paginate() {
  const {
    data: {
      meta: { total_count, per_page },
    },
  } = useGlobalContext();

  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(total_count / per_page); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul>
      {pageNumbers.map((item) => (
        <li
          key={item}
          onClick={() => {
            console.log("Item: " + item, "Page: ");
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Paginate;
