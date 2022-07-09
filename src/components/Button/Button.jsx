import React from "react";
import "./Button.css";
const Button = ({ usedIn, type, text, showPop, setShowPop }) => {
  if (usedIn === "general") {
    return <button className={`btn ${type}`}>{text}</button>;
  }
  if (usedIn === "cancel") {
    return (
      <button onClick={(e) => setShowPop(!showPop)} className={`btn ${type}`}>
        {text}
      </button>
    );
  }
  if (usedIn === "add") {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log(e.target.value);
        }}
        className={`btn ${type}`}
      >
        {text}
      </button>
    );
  }
};

export default Button;
