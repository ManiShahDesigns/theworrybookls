import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const bannerStyle = {
    height: "100%",
  };

  const textStyle = {
    color: "white",
    textAlign: "left",
  };

  return (
    <div class="container">
      <div style={bannerStyle} className="banner row mt-5">
        <div style={textStyle} className="banner__text col-8">
          <h1>Leave your worries in The Worry Book</h1>
          <h3 className="mt-3">and live a happier life.</h3>
          <Link to="/thoughts" className="btn btn-primary mt-3">
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
