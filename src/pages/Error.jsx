import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="error">
      <h1>Nothing so see here!</h1>
      <Link to="/">Go Home</Link>
      <Link to="/">News</Link>
    </section>
  );
}

export default Error;
