import React from "react";
import { useGlobalContext } from "../context";

function Players() {
  const { data } = useGlobalContext();
  console.log(data);

  return <section>Players</section>;
}

export default Players;
