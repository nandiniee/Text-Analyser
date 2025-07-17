import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <h2>{props.title}</h2>
      <Link to="/">Home</Link>
      <Link to="/about">{props.about}</Link>
      <label className="switch">
        <input
          type="checkbox"
          onChange={props.toggleMode}
          defaultChecked={props.mode === "light"}
        />
        <span className="slider"></span>
      </label>
      <span className="mode-text">
        {props.mode === "light" ? "Light Mode" : "Dark Mode"}
      </span>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
