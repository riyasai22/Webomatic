import React, { useContext } from "react";
import { FormContext } from "../../../../Context/FormContext";

import { AiFillProfile } from "react-icons/ai";
import { FaAddressCard, FaUser } from "react-icons/fa";
import { BsFillPiggyBankFill } from "react-icons/bs";
import "./SupplierNav.css";

import { Link } from "react-router-dom";

const sidebarLinks = [
  {
    id: 1,
    icon: <AiFillProfile />,
    title: "SUPPLIER PROFILE",
    path: "#cat1",
  },
  {
    id: 2,
    icon: <FaAddressCard />,
    title: "ADDRESS DETAILS",
    path: "#cat2",
  },
  {
    id: 3,
    icon: <FaUser />,
    title: "CONTACT DETAILS",
    path: "#cat3",
  },
  {
    id: 4,
    icon: <BsFillPiggyBankFill />,
    title: "BANK DETAILS",
    path: "#cat4",
  },
];
const SupplierNav = () => {
  //to add in details to a specific portion of the page

  const { form, setForm } = useContext(FormContext);

  const theme = "light";
  return (
    <div
      className={
        theme === "light"
          ? "supplier-nav-container light"
          : "supplier-nav-container dark"
      }
    >
      <div className="supplier-list">
        {sidebarLinks.map((link, index) => (
          <Link
            onClick={() => setForm(link.id)}
            key={index}
            className={`supplier-list-item  ${
              theme === "light" ? "light" : "dark"
            } ${form === link.id && "active"}
            `}
            to={link.path}
          >
            {link.icon}
            <h3>{link.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SupplierNav;
