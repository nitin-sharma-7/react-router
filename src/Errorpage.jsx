import React from "react";
import { useRouteError } from "react-router-dom";

function Errorpage() {
  const err = useRouteError();

  return (
    <div>
      we are ahowing error here
      <div>{err.data}</div>
      <div>{err.statusText}</div>
      <div> {err.status}</div>
    </div>
  );
}

export default Errorpage;
