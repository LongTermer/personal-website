import React from "react";
import ProjectCard from "./ProjectCard";
import "./projects.css";
import Skills from "../Skills/Skills";
import personalProjects from "../../assets/personal_projects.png";
import openSourceContributions from "../../assets/open_source_contributions.png";
import scaleroad from "../../assets/scaleroad.png";
import avix from "../../assets/avix.png";
import longterm from "../../assets/longterm.png";
import majr from "../../assets/majr.png";
import audits from "../../assets/audits.png";
import tokenflow from "../../assets/tokenflow.png";
import intuition from "../../assets/intuition.png";

const Projects = () => (
  <div className="selected-projects" id="portfolio">
    <h1 className="portfolio-title selected-title">EXPERIENCE</h1>
    <div className="border-line portfolio-border-line" />
    <div className="my-projects">
      {/*<ProjectCard
        img={personalProjects}
        title={"Personal Projects"}
        info={
          <span>
            My passion for building and experimenting with web3
            technology resulted in over 100 personal projects, as shown on my{" "}
            <a
              href="https://github.com/mihailo-maksa"
              target="_blank"
              rel="noopener noreferrer"
              className="bold project-card-link"
            >
              Github.
            </a>
          </span>
        }
        info2={
          <span>
            My projects range from small experiments to full-fledged
            applications, and all of them use{" "}
            the latest web3 and related technologies.
          </span>
        }
      /> */}
      {/* <ProjectCard
        img={openSourceContributions}
        title={"Open Source Contributions"}
        info={
          <span>
            I actively enhanced the functionality and user experience of various{" "}
            open-source web3 protocols and dApps, reflecting my
            dedication to the decentralized web evolution.
          </span>
        }
        info2={
          <span>
            Some notable examples include{" "}
            MetaMask, Aave and Uniswap v3.
          </span>
        }
      /> */}
      <ProjectCard
        img={scaleroad}
        title={"ScaleRoad LLC"}
        jobTitle={"Full Stack Software Engineer"}
        workTime={"(Jul 2018 - Mar 2019)"}
        info={
          <span>
            <a
              href="https://scaleroad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              ScaleRoad
            </a>{" "}
            is a SaaS platform for tracking and managing investment research in
            a structured and organized way.
          </span>
        }
        info2={
          <span>
            I worked on building custom UI elements and integrating complex
            subscription and usage-based payments.
          </span>
        }
      />
      <ProjectCard
        img={avix}
        title={"Avix Finance"}
        jobTitle={"Smart Contract Engineer"}
        workTime={"(Mar 2019 - Dec 2020)"}
        info={
          <span>
            Avix Finance was a permissionless tokenized volatility DeFi protocol
            designed to track the price of VIX on-chain.
          </span>
        }
        info2={
          <span>
            I built smart contracts for the entire protocol and helped with
            integrating Chainlink's on-chain price oracles.
          </span>
        }
      />
      <ProjectCard
        img={longterm}
        title={"LongTerm Finance"}
        jobTitle={"Smart Contract Engineer"}
        workTime={"(Dec 2020 - Jun 2022)"}
        info={
          <span>
            <a
              href="https://long-term.finance"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              LongTerm Finance
            </a>{" "}
            is a tokenized index fund protocol designed to track the market
            capitalization of the entire altcoin market.
          </span>
        }
        info2={
          <span>
            I built smart contracts for the entire protocol and made significant
            contributions to its frontend dashboard as well.
          </span>
        }
      />
      <ProjectCard
        img={majr}
        title={"MAJR, Inc."}
        jobTitle={"Senior Smart Contract Engineer"}
        workTime={"(Jun 2022 - May 2023)"}
        info={
          <span>
            <a
              href="https://majr.io"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              MAJR
            </a>{" "}
            is a web3 media company focused on the creator memberships and
            community digital asset accumulation.{" "}
          </span>
        }
        info2={
          <span>
            I built the MAJR DAO smart contract system from the ground up, as
            well as the contracts enabling NFT minting and staking.
          </span>
        }
      />
      {/*<ProjectCard
        img={audits}
        title={"Smart Contract Audits"}
        customClassName={"audits-card"}
        info={
          <span>
            In addition to my dedication to thorough testing, smart contracts
            I've developed have undergone multiple audits by{" "}
            <a
              href="https://hacken.io"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              Hacken{" "}
            </a>
            and other leading smart contract security auditors.
          </span>
        }
        info2={
          <span>
            Each of these audits has resulted in exceptional scores
            (consistently above 9 out of 10), with no critical bugs, exploits or
            vulnerabilities identified. See{" "}
            <a
              href="https://hacken.io/wp-content/uploads/2022/09/MAJR_INC_SCAudit_Report2.docx.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              audit 1
            </a>
            ,{" "}
            <a
              href="https://wp.hacken.io/wp-content/uploads/2022/09/Majr_Dao_512857947_SCAudit_Report_4.docx.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              audit 2
            </a>{" "}
            and{" "}
            <a
              href="https://hacken.io/wp-content/uploads/2022/09/MAJR-INC_09-19-2022_SCAudit_Report3-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              audit 3
            </a>{" "}
            for more details.
          </span>
        }
      /> */}
      <ProjectCard
        img={tokenflow}
        title={"TokenFlow"}
        jobTitle={"Senior Smart Contract Engineer"}
        workTime={"(May 2023 - December 2023)"}
        info={
          <span>
            <a
              href="https://tokenflow.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              TokenFlow
            </a>{" "}
            is a premier smart contract development agency specialized in
            building custom-made solutions for web3 clients.
          </span>
        }
        info2={
          <span>
            I'm leading the design and development of complex smart contract
            systems, ensuring best practices and security.
          </span>
        }
      />
      <ProjectCard
        img={intuition}
        title={"Intuition"}
        jobTitle={"Senior Solidity Engineer"}
        workTime={"(January 2024 - Present)"}
        info={
          <span>
            <a
              href="https://intuition.systems"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              Intuition
            </a>{" "}
            is the trust protocol, bridging the gap between human trust and
            trustless systems
          </span>
        }
        info2={
          <span>
            I'm working on building and improving smart contracts for the
            Intuition Protocol, as well as contributing to the overall growth of
            the Intuition ecosystem.
          </span>
        }
      />
      <div style={{ marginRight: "-30px" }} />
    </div>
    <Skills />
  </div>
);

export default Projects;
