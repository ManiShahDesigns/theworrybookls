import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    position: "fixed",
    width: "100%",
    padding: "0.5rem",
    margin: "0 auto",
    right: "0",
    left: "0",
  };

  return (
    <nav
      style={navStyle}
      className="d-flex align-items-center justify-content-between container"
    >
      <div className="logo">
        <Link exact="true" to="/" className="h1">
          The Worry Book
        </Link>
      </div>

      <div className="right">
        <Link to="/thoughts" className="btn btn-primary">
          Start here
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
