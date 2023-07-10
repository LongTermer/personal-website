import React from "react";
import "./spinner.css";
import spinner from "../../../assets/spinner.gif";

const Spinner = () => (
  <div className="spinner-container">
    <div>
      <img
        src={spinner}
        alt="Loading..."
        title="Loading..."
        className="spinner"
      />
      <p className="spinner-loading" title="Loading..." style={{ color: "" }}>
        Loading...
      </p>
    </div>
  </div>
);

export default Spinner;
