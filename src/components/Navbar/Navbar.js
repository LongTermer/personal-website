import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CustomButton from "../Layout/CustomButton/CustomButton";
import pfp from "../../assets/pfp.png";

const Navbar = () => (
  <div className="navbar-container">
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img
            className="logo-img"
            width={49}
            height={49}
            alt="Mihailo Maksa"
            src={pfp}
          />
        </Link>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <a
            href="mailto:mihajlomaksa9@gmail.com"
            className="email-link navbar-icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://www.linkedin.com/in/mihailomaksa"
            className="social-link navbar-icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://github.com/mihailo-maksa"
            className="social-link navbar-icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </li>
        <li className="nav-item">
          <CustomButton type="button" className="resume-btn-navbar">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/Resume.pdf"
              className="nav-link"
              style={{
                fontSize: "1em",
                width: "100px",
              }}
            >
              Resume
            </a>
          </CustomButton>
        </li>
      </ul>
    </nav>
    <div className="bottom-line nav-bottom-line" />
  </div>
);

export default Navbar;
