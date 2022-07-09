import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import {
  BsBagCheckFill,
  BsCardChecklist,
  BsFillCartCheckFill,
} from "react-icons/bs";
import { RiHandbagFill, RiPriceTag2Fill } from "react-icons/ri";
import { FaIndustry, FaFileInvoice } from "react-icons/fa";
import { MdPrecisionManufacturing } from "react-icons/md";

import "./Sidebar.css";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
const sidebarLinks = [
  {
    icon: <BsFillCartCheckFill />,
    title: "CATALOGUE",
    path: "/admin/catalogue/categoryList",
  },
  {
    icon: <BsCardChecklist />,
    title: "PURCHASE ORDER",
    path: "/admin/catalogue/categoryList",
  },
  {
    icon: <FiUser />,
    title: "USERS",
    path: "/admin/userlist",
  },
  {
    icon: <FaIndustry />,
    title: "COMPANY",
    path: "/subscriptions",
  },
  {
    icon: <MdPrecisionManufacturing />,
    title: "SUPPLIERS",
    path: "/suppliers",
  },
  {
    icon: <BsBagCheckFill />,
    title: "DIGITAL ORDERS",
    path: "/orders",
  },
  {
    icon: <RiHandbagFill />,
    title: "OFFLINE ORDERS",
    path: "/orders",
  },
  {
    icon: <RiPriceTag2Fill />,
    title: "QUOTE",
    path: "/quote",
  },
  {
    icon: <FaFileInvoice />,
    title: "BILLING",
    path: "/billing",
  },
];

const Sidebar = () => {
  const theme = "light";
  const [collapse, setCollapse] = useState(false);

  return (
    <div
      className={`
      sidebar-container ${theme === "light" ? " light" : "dark"} ${
        collapse && "collapse"
      }
      `}
    >
      <div className="sidebar-list">
        <AiOutlineDoubleLeft
          className={` collapse-btn ${!collapse && "collapse"}`}
          onClick={() => setCollapse(!collapse)}
        />
        <AiOutlineDoubleRight
          className={` collapse-btn ${collapse && "collapse"}`}
          onClick={() => setCollapse(!collapse)}
        />

        {sidebarLinks.map((link, index) => (
          <Link
            key={index}
            className="sidebar-list-item"
            to={link.path}
            style={{
              color: theme === "light" ? `var(--white)` : `var(--purple)`,
            }}
          >
            {link.icon}
            <h3>{link.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
