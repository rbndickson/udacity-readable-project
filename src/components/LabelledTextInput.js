import React from "react";
import { Field } from "formik";
import "./LabelledTextInput.css";

const LabelledTextInput = ({ type, name, label, value }) => {
  return (
    <fieldset className="LabelledTextInput">
      <label htmlFor={name}>{label}</label>
      <Field name={name} type={type} />
    </fieldset>
  );
};

export default LabelledTextInput;
