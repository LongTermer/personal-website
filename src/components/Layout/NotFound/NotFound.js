import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './notfound.css'
import NotFoundImg from '../../../assets/404.svg'
import CustomButton from '../CustomButton/CustomButton'

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="not-found">
        <img src={NotFoundImg} alt="404 Not Found" className="img-404" />

        <div className="content-404">
          <h1 className="title-404 bold text-center">Oops!</h1>
          <p className="desc-404 text-muted text-center">
            Unfortunately, the page you requested does not exist.
          </p>

          <CustomButton onClick={() => navigate("/")}>Home</CustomButton>
        </div>
      </div>
    </div>
  );
}

export default NotFound
