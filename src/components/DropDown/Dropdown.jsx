import React, { useState } from "react";
import "./Dropdown.css";
const Dropdown = ({ showPop, setShowPop }) => {
  const [active, setActive] = useState("0");
  const [selected, setSelected] = useState("Select Department");
  const [display, setDisplay] = useState(false);
  const [rotateCaret, setRotateCaret] = useState(false);

  const handleSelect = (e) => {
    setActive(e.target.getAttribute("data-id"));
    setSelected(e.target.getAttribute("data-val"));
    console.log(active);
  };
  const handleDisplay = (e) => {
    setDisplay(!display);
    setRotateCaret(!rotateCaret);
  };

  const handleNewDept = (e) => {
    e.preventDefault();
    setShowPop(!showPop);
  };
  return (
    <div className="dropdown" onClick={handleDisplay}>
      <div className="select">
        <span className="selected">{selected}</span>
        <div
          className={`caret ${rotateCaret === true ? "caret-rotate" : ""}`}
        ></div>
      </div>
      <ul className={`menu ${display === true ? "menu-open" : ""}`}>
        <li className="addNew">
          <button onClick={handleNewDept}>+ Add New Department</button>
        </li>
        <li
          data-id="1"
          data-val="option1"
          onClick={handleSelect}
          className={`${active === "1" ? "selected" : ""}`}
        >
          Option1
        </li>
        <li
          data-id="2"
          data-val="option2"
          onClick={handleSelect}
          className={`${active === "2" ? "selected" : ""}`}
        >
          Option2
        </li>
        <li
          data-id="3"
          data-val="option3"
          onClick={handleSelect}
          className={`${active === "3" ? "selected" : ""}`}
        >
          Option3
        </li>
        <li
          data-id="4"
          data-val="option4"
          onClick={handleSelect}
          className={`${active === "4" ? "selected" : ""}`}
        >
          Option4
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
