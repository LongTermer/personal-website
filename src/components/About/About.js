import React from "react";
import "./about.css";
import pfp from "../../assets/pfp.png";

const About = () => (
  <div className="about" id="about">
    <img
      className="about-img"
      width={200}
      height={200}
      alt="Mihailo Maksa"
      src={pfp}
    />
    <h1 className="about-heading">ABOUT ME</h1>
    <div className="border-line" />
    <div className="about-me">
      <p>
        As a seasoned{" "}
        <strong>
          smart contract engineer with over 4 years of experience,
        </strong>{" "}
        I bring an in-depth understanding of{" "}
        <strong>
          DeFi, NFTs, DAOs, dApps, blockchain oracles, EVM, crosschain bridges,
          layer 2 scaling solutions like optimistic and zero knowledge (ZK)
          rollups and the wider web3 ecosystem.
        </strong>{" "}
        With a specialty in <strong>Solidity</strong> smart contract
        development, I've contributed to numerous web3 projects since 2018.
      </p>

      <p>
        Combining my technical proficiency with a native-level English fluency,{" "}
        <strong>
          I am a skilled communicator, adept at remote collaboration,
        </strong>{" "}
        and always focused on delivering results in this rapidly evolving
        sector.
      </p>
    </div>
  </div>
);

export default About;
