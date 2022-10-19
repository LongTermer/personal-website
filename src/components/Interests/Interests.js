import React, { useState, useEffect } from "react";
import "./interests.css";
import web3 from "../../assets/web3.png";
import investing from "../../assets/investing.png";
import renewable from "../../assets/renewable.jpg";
import gym from "../../assets/gym.png";
import CustomButton from "../Layout/CustomButton/CustomButton";
import { useMediaQuery } from "react-responsive";

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

  const Interest = ({ img, interestName, interestDesc, radius }) => (
    <div className="interest">
      <img
        src={img}
        alt={interestName}
        width={150}
        height={140}
        className="skill-image"
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
      <h1 className="interests-heading">MY INTERESTS</h1>
      <div className="border-line" />
      <div className="interests-container">
        <Interest
          img={web3}
          interestName={"Web3"}
          interestDesc={
            <span>
              I'm constantly learning and researching about new innovations from
              the web3 space. My favorite areas of research include{" "}
              <strong>decentralized finance (DeFi)</strong> and{" "}
              <strong>Ethereum layer 2 scaling solutions.</strong>
            </span>
          }
        />
        <Interest
          img={investing}
          radius
          interestName={"Investing"}
          interestDesc={
            <span>
              I strongly believe that compound interest is the eighth world
              wonder.{" "}
              <strong>
                I bought my first Ether during the 2018 bear market
              </strong>{" "}
              and haven't stopped finding new opportunities ever since.
            </span>
          }
        />
        <Interest
          img={renewable}
          interestName={"Renewable Energy"}
          interestDesc={
            <span>
              I believe it's essential for the{" "}
              <strong>humanity's future prosperity</strong> that we focus on
              transitioning to the renewable energy as soon as possible. I'm
              especially interested in <strong>electric vehicles</strong> and
              <strong> solar energy.</strong>
            </span>
          }
        />
        <Interest
          img={gym}
          interestName={"Workout & Nutrition"}
          interestDesc={
            <span>
              I work out every day, as it helps keep my stress levels low and{" "}
              <strong>it makes me much more productive in my work.</strong>{" "}
              Also, a healthy, balanced and mostly plant-based diet is a
              priority to me.
            </span>
          }
        />
      </div>

      <CustomButton
        type="button"
        style={{
          marginTop: isMobile ? "235px" : "96px",
        }}
      >
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-link"
        >
          Resume
        </a>
      </CustomButton>

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
  );
};

export default Interests;
