import React, { useState } from "react";
import { useParams } from "react-router-dom";
import movies from "./movies";

function Details() {
  const n = useParams();
  console.log(n.name);
  const [movie] = movies.filter((val) => val.name == n.name);

  return (
    <div>
      <div>{movie.name}</div>
      <div>{movie.description}</div>
    </div>
  );
}

export default Details;
