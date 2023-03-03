import { useGlobalContext } from "../context";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  const { data, setPage } = useGlobalContext();

  const handlePageClick = ({
    selected: selectedPage,
  }: {
    selected: number;
  }) => {
    setPage(selectedPage);

    window.scroll({
      top: 0,
    });
  };

  return (
    <section>
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={data?.meta?.total_pages}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        nextLinkClassName="next"
        previousLinkClassName="prev"
        activeClassName="active"
      />
    </section>
  );
};

export default Pagination;
