import React, { useState, useEffect } from "react";
import "./interests.css";
import web3 from "../../assets/web3.png";
import investing from "../../assets/investing.png";
import renewable from "../../assets/renewable.jpg";
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
              As a dedicated and forward-thinking individual,{" "}
              <strong>I am consistently expanding my knowledge</strong> and
              understanding of the latest advancements in the web3 space. <br />
              <br /> My areas of focus include{" "}
              <strong>decentralized finance (DeFi)</strong> and{" "}
              <strong>Ethereum layer 2 scaling solutions,</strong> which I
              continuously research and study in order to stay at the forefront
              of the industry.
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
              I made my{" "}
              <strong>
                first investment in Ether during the bear market of 2018
              </strong>{" "}
              and have been actively seeking out new opportunities in the crypto
              market ever since.
              <br /> <br />
              Through my <strong>continued research</strong> and{" "}
              <strong>proven investment strategies,</strong> I am dedicated to
              realizing the full potential of my crypto assets and maximizing
              returns.
            </span>
          }
        />
        <Interest
          img={renewable}
          style={{
            marginTop: isMobile ? "-75px" : "0",
          }}
          interestName={"Renewable Energy"}
          interestDesc={
            <span>
              As a forward-thinking individual, I am convinced that a rapid
              transition to renewable energy sources is crucial for humanity's
              future prosperity. I am particularly passionate about the
              potential of <strong>electric vehicles</strong> and{" "}
              <strong>solar energy.</strong>
              <br /> <br />I am dedicated to staying informed and educated about
              the latest developments in these industries, and actively seeking
              out opportunities to{" "}
              <strong>contribute to their growth and success.</strong>
            </span>
          }
        />
        <Interest
          img={gym}
          style={{
            marginTop: isMobile ? "-70px" : "0",
          }}
          interestName={"Workout & Nutrition"}
          interestDesc={
            <span>
              I am fully committed to maintaining a healthy lifestyle through{" "}
              <strong>daily exercise</strong> and{" "}
              <strong>a well-balanced diet.</strong> I especially appreciate the
              positive impact that this has on{" "}
              <strong>reducing my stress levels</strong> and{" "}
              <strong>increasing my productivity.</strong>
              <br /> <br />I believe that taking care of oneself through fitness
              and nutrition is essential for achieving professional goals, and I
              make it a priority to{" "}
              <strong>
                maintain these habits as a part of my daily routine.
              </strong>
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
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              Resume
            </a>
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
