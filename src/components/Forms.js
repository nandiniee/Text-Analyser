import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Forms(props) {
  const myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#333" : "#f0f0f0",
  };

  const handleOnClick1 = () => {
    console.log("Reset button clicked");
    setText("");
    setSearch("");
    setRep("");
    props.addAlert("Text has been reset", "success");
  };

  const handleOnClick2 = () => {
    console.log("Uppercase button clicked");
    setText(text.toUpperCase());
    props.addAlert("Text has been converted to uppercase", "success");
  };

  const handleOnClick3 = () => {
    console.log("Lowercase button clicked");
    setText(text.toLowerCase());
  };

  const handleOnClick4 = () => {
    console.log("Search button clicked");
    const searchWord = search.trim();
    const replaceWord = rep.trim();
    setText(text.replaceAll(searchWord, replaceWord));
  };

  const handleOnChange = (event) => {
    console.log("Text changed");
    setText(event.target.value);
    // setText('Text has been changed');
  };

  const handleSearchChange = (event) => {
    console.log("Search word changed");
    setSearch(event.target.value);
  };

  const handleRepChange = (event) => {
    console.log("Replace word changed");
    setRep(event.target.value);
  };

  const [text, setText] = useState("");
  const [search, setSearch] = useState(""); // Initialize search state
  const [rep, setRep] = useState(""); // Initialize search state

  // setText('Enter your text here');
  return (
    <>
      <div className="box">
        <div className="container" style={myStyle}>
          <h2>Your text summary</h2>
          <p>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} minutes to read</p>
        </div>

        <div className="container" style={myStyle}>
          <h1>{props.title}</h1>
          <form>
            <textarea
              id="enterText"
              value={text}
              placeholder="Enter your text here"
              onChange={handleOnChange}
              style={myStyle}
            />
          </form>
          <div className="Buttons">
            <button type="reset" onClick={handleOnClick1}>
              Reset
            </button>
            <button type="button" onClick={handleOnClick2}>
              Convert to Uppercase
            </button>
            <button type="button" onClick={handleOnClick3}>
              Convert to Lowercase
            </button>
            <input
              type="text"
              id="searchText"
              value={search}
              placeholder="Replace Word"
              onChange={handleSearchChange}
            />
            <input
              type="text"
              id="replaceText"
              value={rep}
              placeholder="New Word"
              onChange={handleRepChange}
            />
            <button type="button" onClick={handleOnClick4}>
              Replace
            </button>
          </div>
        </div>

        <div className="container" style={myStyle}>
          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Enter something in the textbox to preview it here"}
          </p>
        </div>
      </div>
    </>
  );
}
Forms.propTypes = {
  title: PropTypes.string.isRequired,
};
