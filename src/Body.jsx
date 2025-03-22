import React, { useState } from "react";
import { Link } from "react-router-dom";
import movies from "./movies";

function Body() {
  const [data, setData] = useState(movies);
  //   console.log(data);
  return (
    <div className="body">
      {data.map((movie, i) => {
        return (
          <div className="movies" key={i}>
            <Link to={movie.name}>
              <div>{movie.name}</div>
              <img src={movie.description} alt="" width="100px" height="50px" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Body;
