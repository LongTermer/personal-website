import React, { useState, useEffect } from "react";
import "./interests.css";
import web3 from "../../assets/web3.png";
import investing from "../../assets/investing.png";
import traveling from "../../assets/traveling.png";
import gym from "../../assets/gym.png";
import CustomButton from "../Layout/CustomButton/CustomButton";
import { useMediaQuery } from "react-responsive";
import { PopupButton } from "react-calendly";

const Interests = () => {
  const [altLinks, setAltLinks] = useState([
    "https://mihailomaksa.com",
    "https://mihailomaksa.eth.link",
    "https://mihailomaksa.eth.limo",
  ]);

  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  useEffect(() => {
    const main = () => {
      const filteredAltLinks = altLinks.filter(
        (link) => link !== window.location.origin
      );
      setAltLinks(filteredAltLinks);
    };
    main();
  }, []);

  const Interest = ({ img, interestName, interestDesc, radius, style }) => (
    <div className="interest" style={style}>
      <img
        src={img}
        alt={interestName}
        width={150}
        height={140}
        className="interest-image"
        style={{
          borderRadius: radius && "5%",
        }}
      />
      <h3 className="interest-title">{interestName}</h3>
      <p className="interest-desc">{interestDesc}</p>
    </div>
  );

  return (
    <div className="interests">
      <h1 className="interests-heading">INTERESTS</h1>
      <div className="border-line interests-border-line" />
      <div className="interests-container">
        <Interest
          img={web3}
          interestName={"Web3"}
          interestDesc={
            <span>
              I am deeply committed to staying at the forefront of the web3
              space, with a strong focus on decentralized finance (DeFi) and
              Ethereum layer 2 scaling solutions. I actively expand my knowledge
              and expertise in these areas, continuously researching the latest
              industry advancements.
            </span>
          }
        />
        <Interest
          img={investing}
          radius
          style={{
            marginTop: isMobile ? "-39px" : "0",
          }}
          interestName={"Investing"}
          interestDesc={
            <span>
              I made my first investment in BTC and ETH during the 2018 bear
              market, and they continue to form the backbone of my portfolio.
              Through strategic research, I actively pursue new opportunities to
              maximize the potential and returns of my crypto investments.
            </span>
          }
        />
        <Interest
          img={traveling}
          style={{
            marginTop: isMobile ? "-40px" : "20px",
          }}
          interestName={"Traveling"}
          interestDesc={
            <span>
              I’m passionate about exploring new places and cultures, which
              broadens my perspective and inspires my work. Traveling helps me
              connect with diverse communities and brings fresh insights to my
              personal and professional life.
            </span>
          }
        />
        <Interest
          img={gym}
          style={{
            marginTop: isMobile ? "-70px" : "0",
          }}
          interestName={"Working Out"}
          interestDesc={
            <span>
              I am dedicated to maintaining a healthy lifestyle through regular
              exercise, appreciating its positive impact on my well-being,
              stress management, and productivity. Staying active is essential
              to my routine, helping me stay focused and perform at my best.
            </span>
          }
        />
      </div>

      <div
        style={{
          marginTop: isMobile ? "405px" : "91px",
        }}
      >
        <div className="button-container bottom-button-container">
          <PopupButton
            url="https://calendly.com/mihailo-maksa/30min"
            rootElement={document.getElementById("root")}
            type="button"
            className="custom-button outline-button"
            text="Let's Talk"
          />
          <CustomButton
            type="button"
            className="resume-btn-bottom"
            onClick={() => window.open("/Resume.pdf", "_blank")}
          >
            Resume
          </CustomButton>
        </div>

        <div className="alternative-links">
          <h2 className="alternative-links-heading bold">
            Alternative Website Links:
          </h2>
          <div className="alternative-links-container">
            {altLinks.map((link) => (
              <span key={link}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bold project-card-link"
                >
                  {link.split("://")[1]}
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;
