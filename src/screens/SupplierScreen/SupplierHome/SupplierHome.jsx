import React, { useEffect, useState } from "react";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import Button from "../../../components/Button/Button";
import Navbar from "../../../components/Navbar/Navbar";
import Popup from "../../../components/Popup/Popup";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Title from "../../../components/Title/Title";
import { FormContext } from "../../../Context/FormContext";
import AddSupplier from "../AddSupplier/AddSupplier";
import SupplierNav from "../components/SupplierNavigation/SupplierNav";

import "./SupplierHome.css";

const SupplierHome = () => {
  const [form, setForm] = useState(1);
  useEffect(() => {
    console.log(form);
  }, [form]);
  const [showPop, setShowPop] = useState(false);

  return (
    <div className="outer-container">
      <Navbar />
      <Sidebar />
      <Popup showPop={showPop} setShowPop={setShowPop} />
      <div className="main-container">
        <Breadcrumb />
        <div className="title-n-btn">
          <Title text="Add Suppliers" />
          <Button usedIn="general" text="Save Changes" type="btn-primary" />
        </div>
        <div className="form-container">
          <FormContext.Provider value={{ form, setForm }}>
            <SupplierNav />
            <AddSupplier showPop={showPop} setShowPop={setShowPop} />
          </FormContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default SupplierHome;
