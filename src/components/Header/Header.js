import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="banner d-flex flex-column justify-content-center">
      <div className="banner__text col-8">
        <h1>Leave your worries in The Worry Book</h1>
        <h3 className="mt-3">and live a happier life.</h3>
        <Link to="/thoughts" className="btn btn-primary mt-3">
          Get started
        </Link>
      </div>
    </div>
  );
}

export default Header;
