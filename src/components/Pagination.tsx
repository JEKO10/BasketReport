import { useGlobalContext } from "../context";

const Pagination = () => {
  const { data, page, setPage } = useGlobalContext();
  const pageNumbers = [];
  console.log(data.meta);

  for (
    let i = 1;
    i < Math.ceil(data?.meta.total_count / data?.meta.per_page);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <section>
      <ul className="pagination">
        {pageNumbers.slice(page - 1, page + 4).map((item) => (
          <li
            value={item}
            key={item}
            onClick={(e) => {
              setPage(e.currentTarget.value);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Pagination;
