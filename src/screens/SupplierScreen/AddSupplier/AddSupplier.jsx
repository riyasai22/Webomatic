import React, { useContext } from "react";
import FormInputField from "../../../components/FormInputField/FormInputField";
import { FormContext } from "../../../Context/FormContext";
import "./AddSupplier.css";

const SupplierProfile = [
  {
    title: "Business",
    mandatory: true,
    desc: "This is a mandatory field. Mention the business name description",
    type: "long",
  },
  {
    title: "Owner",
    mandatory: false,
    desc: "Mention the owner full name .",
    type: "long",
  },
  {
    title: "Brand",
    mandatory: false,
    desc: "This is optional. The brand name describes so and so forth",
    type: "long",
  },
  {
    title: "Website",
    mandatory: true,
    desc: "Include https:// while adding the website",
    type: "long",
  },
  {
    title: "GST No.",
    mandatory: true,
    desc: "eg. 10AABCU9603R1Z2",
    type: "short",
  },
  {
    title: "Supplier Code",
    mandatory: false,
    desc: "eg. 100324",
    type: "short",
  },
  {
    title: "Description",
    mandatory: false,
    desc: "Add a supplier description...",
    type: "text-box",
  },
  {
    title: "Is Active",
    mandatory: false,
    desc: "",
    type: "option",
  },
];
const AddressDetails = [
  {
    title: "First Name",
    mandatory: true,
    desc: "",
    type: "short",
  },
  {
    title: "Last Name",
    mandatory: true,
    desc: "",
    type: "short",
  },
  {
    title: "Address Line",
    mandatory: true,
    desc: "",
    type: "dynamic-inp",
  },
  {
    title: "Postcode",
    mandatory: true,
    desc: "",
    type: "short",
  },
  {
    title: "Town/City/State",
    mandatory: false,
    desc: "",
    type: "short",
  },
  {
    title: "Phone Number",
    mandatory: false,
    desc: "Mention your phone number along with country code.",
    type: "long",
  },
  {
    title: "Department",
    mandatory: true,
    desc: "Select or add the department with respect to the supplier.",
    type: "select",
  },
  {
    title: "Delivery Intructions",
    mandatory: false,
    desc: "Type in delivery instruction...",
    type: "text-box",
  },
  {
    title: "Set Default",
    mandatory: false,
    desc: "",
    type: "option",
  },
];
const AddSupplier = ({ showPop, setShowPop }) => {
  const { form } = useContext(FormContext);
  return (
    <form>
      <div className={` form-group ${form === 1 ? "show" : ""}`}>
        {SupplierProfile.map((data) => (
          <FormInputField
            type={data.type}
            key={data.title}
            title={data.title}
            mandatory={data.mandatory}
            desc={data.desc}
          />
        ))}
      </div>
      <div className={` form-group ${form === 2 ? "show" : ""}`}>
        {AddressDetails.map((data) => (
          <FormInputField
            type={data.type}
            key={data.title}
            title={data.title}
            mandatory={data.mandatory}
            desc={data.desc}
            showPop={showPop}
            setShowPop={setShowPop}
          />
        ))}
      </div>
    </form>
  );
};

export default AddSupplier;
