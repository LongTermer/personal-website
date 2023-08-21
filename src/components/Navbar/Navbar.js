import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";
import EmailIcon from "@material-ui/icons/Email";
import CustomButton from "../Layout/CustomButton/CustomButton";
import logo from "../../assets/logo.png";
import { useMediaQuery } from "react-responsive";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import { PopupButton } from "react-calendly";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const Navbar = () => {
  const isMobileHeader = useMediaQuery({ query: "(max-width: 800px)" });

  const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
  });

  const SwipeableTemporaryDrawer = () => {
    const classes = useStyles();
    const [state, setState] = useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event &&
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
      <div
        className={`${clsx(classes.list, {
          [classes.fullList]: anchor === "top" || anchor === "bottom",
        })} mobile-menu-container`}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List className="mobile-menu">
          <div className="mobile-menu-social-links">
            <a
              href="https://twitter.com/MihailoMaksa"
              className="social-link navbar-icon-link mobile-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="mobile-social-icon" />
            </a>
            <a
              href="https://linkedin.com/in/mihailomaksa"
              className="social-link navbar-icon-link mobile-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="mobile-social-icon" />
            </a>
            <a
              href="https://github.com/mihailo-maksa"
              className="social-link navbar-icon-link mobile-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="mobile-social-icon" />
            </a>
            <a
              href="https://t.me/MihailoMaksa"
              className="social-link navbar-icon-link mobile-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon className="mobile-social-icon" />
            </a>
            <a
              href="mailto:mihajlomaksa9@gmail.com"
              className="email-link navbar-icon-link mobile-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon className="mobile-social-icon" />
            </a>
          </div>
          <CustomButton
            type="button"
            onClick={() =>
              window.open("https://calendly.com/mihailo-maksa/30min", "_blank")
            }
            className="custom-button outline-button transparent-outline-button navbar-resume-btn navbar-transparent-button mobile-menu-lets-talk-button"
          >
            Let's Talk
          </CustomButton>
          <button
            type="button"
            onClick={() => window.open("/Resume.pdf", "_blank")}
            className="mobile-menu-resume-button"
          >
            Resume
          </button>
        </List>
      </div>
    );

    const styles = {
      largeIcon: {
        width: 35,
        height: 35,
        position: "relative",
        bottom: 3,
      },
    };

    return (
      <div>
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              style={{ backgroundColor: "#fafbfd" }}
              onClick={toggleDrawer(anchor, true)}
            >
              <MenuIcon style={styles.largeIcon} className="menu-icon" />
            </Button>
            <SwipeableDrawer
              anchor={"right"}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        {isMobileHeader ? (
          <React.Fragment>
            <div className="logo">
              <Link to="/" className="logo-link">
                <img
                  className="logo-img"
                  width={49}
                  height={49}
                  alt="Logo"
                  src={logo}
                />
              </Link>
            </div>
            <div className="swipeable-drawer-mobile">
              <SwipeableTemporaryDrawer />
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="logo">
              <Link to="/" className="logo-link">
                <img
                  className="logo-img"
                  width={49}
                  height={49}
                  alt="Logo"
                  src={logo}
                />
              </Link>
            </div>
            <ul className="nav-list">
              <li className="nav-item">
                <a
                  href="https://twitter.com/MihailoMaksa"
                  className="email-link navbar-icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon />
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://linkedin.com/in/mihailomaksa"
                  className="email-link navbar-icon-link"
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
                <a
                  href="https://t.me/MihailoMaksa"
                  className="social-link navbar-icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TelegramIcon />
                </a>
              </li>
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
                <PopupButton
                  url="https://calendly.com/mihailo-maksa/30min"
                  rootElement={document.getElementById("root")}
                  type="button"
                  className="custom-button outline-button transparent-outline-button navbar-lets-talk-button navbar-transparent-button"
                  text="Let's Talk"
                />
              </li>
              <li className="nav-item">
                <CustomButton
                  type="button"
                  onClick={() => window.open("/Resume.pdf", "_blank")}
                  className="navbar-resume-btn"
                >
                  Resume
                </CustomButton>
              </li>
            </ul>
          </React.Fragment>
        )}
      </nav>
      <div className="bottom-line nav-bottom-line" />
    </div>
  );
};

export default Navbar;
