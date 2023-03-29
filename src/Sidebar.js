import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <div className="Sidebar">
        <Link className="menu" to="/">
          Home
        </Link>
        <Link className="menu" to="/About">
          About
        </Link>
        <Link className="menu" to="/Service">
          Service
        </Link>
        <Link className="menu" to="/Register">
          Register
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
