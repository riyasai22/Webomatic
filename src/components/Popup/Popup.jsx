import React, { useState } from "react";
import Button from "../Button/Button";
import "./Popup.css";
import FormInputField from "../FormInputField/FormInputField";
const Popup = ({ showPop, setShowPop }) => {
  const [dept,setDept]=useState("none")
  return (
    <div
      className={`popup-wrapper ${showPop === true ? "active" : ""} `}
      id="popup"
    >
      <div className="popup-container">
        <FormInputField
          title="Add New Department"
          mandatory=""
          desc="New Department"
          type="popup"
        />
        <div className="option-container">
          <Button usedIn="add" type="btn-primary" text="Add" />
          <Button
            usedIn="cancel"
            type="btn-cancel"
            text="Cancel"
            showPop={showPop}
            setShowPop={setShowPop}
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;
