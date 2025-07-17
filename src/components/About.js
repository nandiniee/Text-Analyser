import React from "react";

export default function About(props) {
  return (
    <div
      className="about"
      style={{
        backgroundColor: props.mode === "dark" ? "black" : "#f0f0f0",
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <h2>About Us</h2>
      <p>
        This is a simple React application demonstrating the use of components,
        props, and state management.
      </p>
      <p>
        The application is designed to help users run various tasks such as
        converting text to uppercase, lowercase, and performing search and
        replace operations on text. It also includes a dark mode feature that
        can be toggled to enhance user experience in different lighting
        conditions.
      </p>
    </div>
  );
}
