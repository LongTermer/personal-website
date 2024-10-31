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
        As a seasoned Senior Solidity Smart Contract Engineer with over five
        years of experience, I bring a comprehensive skill set in various
        sectors of the web3 space, including DeFi, NFTs, DAOs, dApps, blockchain
        oracles, EVM, cross-chain bridges, layer 2 scaling solutions, liquid
        staking and restaking (LSTs and LRTs), RWA (real world assets)
        tokenization and more.
      </p>

      <p>
        I have contributed to numerous web3 projects since 2018, delivering
        hundreds of production-ready smart contracts that have been
        battle-tested through rigorous audits and deployed on various chains,
        serving thousands of users.
      </p>

      <p>
        My expertise is complemented by native-level English fluency, strong
        communication skills, and a proven track record in remote collaboration.
        I am dedicated to delivering impactful results in the rapidly evolving
        web3 ecosystem.
      </p>
    </div>
  </div>
);

export default About;
