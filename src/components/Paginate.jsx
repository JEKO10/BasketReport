import { useGlobalContext } from "../context";

function Paginate() {
  const { data } = useGlobalContext();
  const total = data.meta.total_count;
  const perPage = data.meta.per_page;
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(total / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {pageNumbers.map((item) => {
        console.log(item);
        return <h1>{item}</h1>;
      })}
    </>
  );
}

export default Paginate;
