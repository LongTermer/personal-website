import React from "react";
import "./footer.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";
import EmailIcon from "@material-ui/icons/Email";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 550px)" });

  return (
    <div className="footer">
      <div className="footer-links">
        <a
          href="https://twitter.com/MihailoMaksa"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://linkedin.com/in/mihailomaksa"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/mihailo-maksa"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://t.me/MihailoMaksa"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TelegramIcon />
        </a>
        <a
          href="mailto:mihajlomaksa9@gmail.com"
          className="email-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon />
        </a>
      </div>
      {!isMobile && <br />}
      <p className="copyright">
        Made By{" "}
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
          <span className="author">Mihailo Maksa</span>
        </a>{" "}
        &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
