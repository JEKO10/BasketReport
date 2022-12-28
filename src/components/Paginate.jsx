import { useGlobalContext } from "../context";

function Paginate() {
  const { data, page, setPage } = useGlobalContext();
  const pageNumbers = [];

  for (
    let i = 1;
    i < Math.ceil(data?.meta.total_count / data?.meta.per_page);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <>
      {data ? (
        <ul>
          {pageNumbers.map((item) => (
            <li
              value={item}
              key={item}
              onClick={(e) => {
                setPage(e.target.value);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </>
  );
}

export default Paginate;
