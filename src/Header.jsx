import React from "react";
import { Link, NavLink } from "react-router-dom";

// NavLink are great for link their active class gives extra ability to us
// classname ={can pass a function here}
//[aria-current="page"] can style iusing this or active class
function Header() {
  return (
    <div className="header">
      <NavLink to="/">home</NavLink>
      <NavLink to="/contact">contact</NavLink>
      <NavLink to="/about">about</NavLink>
      <Link to="/about">about</Link>
    </div>
  );
}

export default Header;
