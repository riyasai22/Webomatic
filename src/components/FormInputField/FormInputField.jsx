import React, { useState } from "react";
import Dropdown from "../DropDown/Dropdown";
import Popup from "../Popup/Popup";
import "./FormInputField.css";
// import Select from "react-select";
// import Async, { useAsync } from "react-select/async";
// import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
// import makeAnimated from "react-select/animated";
// const animatedComponents = makeAnimated();
//add mandatory to inp field {mandatory===true ? "required" :""}
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Option = ({ item }) => {
  return <option value={item.value}>{item.label}</option>;
};

const InputForm = ({ title, mandatory, desc, type, showPop, setShowPop }) => {
  // const handleAddDept = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.value);
  //   setShowPop(!showPop);
  // };
  // const [currentValue, setCurrentValue] = useState();

  const theme = "light";
  const [addressField, setAddressField] = useState([{ addressLine: "" }]);
  const addFields = (e) => {
    e.preventDefault();

    let newfield = {
      addressLine: "",
    };
    setAddressField([...addressField, newfield]);
  };
  if (type === "long") {
    return (
      <div className="input-group">
        <div className="label-group">
          <label
            className={`label ${mandatory ? " mandatory" : ""} ${
              theme === "light" ? "light" : "dark"
            }`}
            name={title}
          >
            {title}
            <span>*</span>
          </label>
          <p className="inp-desc">{desc}</p>
        </div>
        <input className="inp-field" type="text" id={title} />
      </div>
    );
  }
  if (type === "short")
    return (
      <div className="input-group short">
        <label
          className={`label ${mandatory ? " mandatory" : ""} ${
            theme === "light" ? "light" : "dark"
          }`}
          name={title}
        >
          {title}
          <span>*</span>
        </label>
        <input
          className="inp-field"
          type="text"
          id={title}
          placeholder={desc}
        />
      </div>
    );
  if (type === "dynamic-inp")
    return (
      <div className="input-group dynamic-inp">
        <div className="label-group">
          <label
            className={`label ${mandatory ? " mandatory" : ""} ${
              theme === "light" ? "light" : "dark"
            }`}
            name={title}
          >
            {title}
            <span>*</span>
          </label>
        </div>
        <div className="dynamic-input-group">
          {addressField.map((input, index) => {
            return (
              <input
                key={index}
                className="inp-field"
                type="text"
                id={title}
                value={input.address}
                placeholder={desc}
              />
            );
          })}
          <button class="btn-blank" onClick={addFields}>
            + Add Address Line
          </button>
        </div>
      </div>
    );
  if (type === "popup")
    return (
      <div className="input-group popup-inp">
        <label
          className={`label ${mandatory ? " mandatory" : ""} ${
            theme === "light" ? "light" : "dark"
          }`}
          name={title}
        >
          {title}
          <span>*</span>
        </label>
        <input
          className="inp-field"
          type="text"
          id={title}
          placeholder={desc}
        />
      </div>
    );

  if (type === "text-box")
    return (
      <div className="input-group text-box">
        <label
          className={`label ${mandatory === true && " mandatory"} ${
            theme === "light" ? "light" : "dark"
          }`}
          name={title}
        >
          {title}
          <span>*</span>
        </label>
        <textarea
          className="text-field"
          type="text"
          id={title}
          placeholder={desc}
        />
      </div>
    );
  if (type === "option")
    return (
      <div className=" option input-group">
        <label
          className={`label ${mandatory === true && " mandatory"} ${
            theme === "light" ? "light" : "dark"
          }`}
          name={title}
        >
          {title}
          <span>*</span>
        </label>
        <input className="text-field" type="checkbox" id={title} />
      </div>
    );
  if (type === "select")
    return (
      <div>
        <div className="input-group short">
          <label
            className={`label ${mandatory ? " mandatory" : ""} ${
              theme === "light" ? "light" : "dark"
            }`}
            name={title}
          >
            {title}
            <span>*</span>
          </label>
          <Dropdown showPop={showPop} setShowPop={setShowPop} />
        </div>
      </div>
    );
};

export default InputForm;
