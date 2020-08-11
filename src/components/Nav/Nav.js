import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="d-flex align-items-center justify-content-between">
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
