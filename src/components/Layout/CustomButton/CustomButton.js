import React from "react";
import "./custombutton.css";

const CustomButton = ({ children, className, ...otherProps }) => (
  <button className={`custom-button ${className}`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
