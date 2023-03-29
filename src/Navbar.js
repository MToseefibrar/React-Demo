import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="header">
        <div className="logo"> navbar</div>
        <div className="Menu-links">
          <Link className="menu" to="/">
            Home{" "}
          </Link>
          <Link className="menu" to="/About">
            About{" "}
          </Link>
          <Link className="menu" to="/Service">
            Service{" "}
          </Link>
          <Link className="menu" to="/Register">
            Register{" "}
          </Link>
        </div>
      </header>
    </>
  );
}
export default Navbar;
