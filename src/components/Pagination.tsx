import { useGlobalContext } from "../context";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { MdFirstPage, MdLastPage } from "react-icons/md";

const Pagination = () => {
  const { data, page, setPage } = useGlobalContext();
  const pageNumbers = [];

  for (let i = 0; i <= data?.meta?.total_pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <section>
      <ul className="pagination">
        <li className="prev" onClick={() => setPage(1)}>
          <MdFirstPage />
        </li>
        <li
          className="prev"
          onClick={() => {
            page === 1 ? setPage(pageNumbers.length - 1) : setPage(page - 1);
          }}
        >
          <GrFormPrevious />
        </li>
        {pageNumbers
          .slice(
            ...(page === 2
              ? [page - 1, page + 4]
              : page === 1
              ? [page, page + 5]
              : [page - 2, page + 3])
          )
          .map((page: number) => {
            return (
              <li
                className={data.meta.current_page === page ? "active" : ""}
                value={page}
                key={page}
                onClick={(e) => {
                  setPage(e.currentTarget.value);
                }}
              >
                {page}
              </li>
            );
          })}
        <li
          className="next"
          onClick={() => {
            page === pageNumbers.length - 1 ? setPage(1) : setPage(page + 1);
          }}
        >
          <GrFormNext />
        </li>
        <li className="next" onClick={() => setPage(pageNumbers.length - 1)}>
          <MdLastPage />
        </li>
      </ul>
    </section>
  );
};

export default Pagination;
