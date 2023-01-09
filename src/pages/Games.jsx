import React from "react";
import { useGlobalContext } from "../context";

function Games() {
  const { data } = useGlobalContext();
  console.log(data);

  return <section>Games</section>;
}

export default Games;
