import React from "react";
import "./errorboundary.css";
import errorImg from "../../../assets/error-img.png";

const ErrorPage = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title bold text-center" title="Page Not Found">
        <i className="fas fa-exclamation-triangle warning-icon" /> Sorry, This
        Page is Broken!
      </h1>

      <p className="come-back-later text-center">
        We are working hard to solve this problem ASAP!
      </p>

      <img
        className="img-not-found"
        src={errorImg}
        alt="Page Not Found"
        title="Page Not Found"
      />
    </div>
  );
};

export default ErrorPage;
