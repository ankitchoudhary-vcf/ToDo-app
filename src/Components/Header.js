import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <>
      <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <h2 className="title">{props.title}</h2>
          </Link>
          <button
            type="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={(e) => {props.burger(e)}}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/about" className="navbar-item">
              About
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

Header.defaultProps = {
  title: "Your Title Here",
};

Header.propTypes = {
  title: PropTypes.string,
};
