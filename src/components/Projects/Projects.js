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

const Projects = () => (
  <div className="selected-projects" id="portfolio">
    <h1 className="portfolio-title selected-title">EXPERIENCE</h1>
    <div className="border-line portfolio-border-line" />
    <div className="my-projects">
      <ProjectCard
        img={personalProjects}
        title={"Personal Projects"}
        info={
          <span>
            <strong>My passion for building</strong> and experimenting with web3
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
            <strong>the latest web3 and related technologies.</strong>
          </span>
        }
      />
      <ProjectCard
        img={openSourceContributions}
        title={"Open Source Contributions"}
        info={
          <span>
            I actively enhanced the functionality and user experience of various{" "}
            <strong>open-source web3 protocols and dApps,</strong> reflecting my
            dedication to the decentralized web evolution.
          </span>
        }
        info2={
          <span>
            Some notable examples include{" "}
            <strong>MetaMask, Aave and Uniswap v3.</strong>
          </span>
        }
      />
      <ProjectCard
        img={scaleroad}
        title={"ScaleRoad LLC"}
        info={
          <span>
            <strong>
              <a
                href="https://scaleroad.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bold project-card-link"
              >
                ScaleRoad
              </a>{" "}
              is a SaaS platform for tracking and managing investment research
            </strong>{" "}
            in a structured and organized way.
          </span>
        }
        info2={
          <span>
            <strong>I worked on building custom UI elements</strong> and
            integrating complex subscription and usage-based payments.
          </span>
        }
      />
      <ProjectCard
        img={avix}
        title={"Avix Finance"}
        info={
          <span>
            Avix Finance was a permissionless{" "}
            <strong>tokenized volatility DeFi protocol</strong> designed to
            track the price of VIX on-chain.
          </span>
        }
        info2={
          <span>
            <strong>I built smart contracts for the entire protocol</strong> and
            helped with integrating Chainlink's{" "}
            <strong>on-chain price oracles.</strong>
          </span>
        }
      />
      <ProjectCard
        img={longterm}
        title={"LongTerm Finance"}
        info={
          <span>
            <a
              href="https://long-term.finance"
              target="_blank"
              rel="noopener noreferrer"
              className="bold project-card-link"
            >
              LongTerm Finance
            </a>{" "}
            is a <strong>tokenized index fund protocol</strong> designed to
            track the market capitalization of the entire altcoin market.
          </span>
        }
        info2={
          <span>
            <strong>I built smart contracts for the entire protocol</strong> and
            made significant contributions to its{" "}
            <strong>frontend dashboard</strong> as well.
          </span>
        }
      />
      <ProjectCard
        img={majr}
        title={"MAJR, Inc."}
        info={
          <span>
            <a
              href="https://majr.io"
              target="_blank"
              rel="noopener noreferrer"
              className="bold project-card-link"
            >
              MAJR
            </a>{" "}
            is a <strong>web3 media company</strong> focused on the creator
            memberships and community{" "}
            <strong>digital asset accumulation.</strong>{" "}
          </span>
        }
        info2={
          <span>
            <strong>
              I built the MAJR DAO smart contract system from the ground up,
            </strong>{" "}
            as well as the contracts enabling NFT minting and staking.
          </span>
        }
      />
      <ProjectCard
        img={audits}
        title={"Smart Contract Audits"}
        info={
          <span>
            The smart contracts that I developed were{" "}
            <strong>
              audited multiple times by{" "}
              <a
                href="https://hacken.io"
                target="_blank"
                rel="noopener noreferrer"
                className="bold project-card-link"
              >
                Hacken
              </a>
              ,
            </strong>{" "}
            a leading smart contract security auditor.
          </span>
        }
        info2={
          <span>
            Each audit has resulted in{" "}
            <strong>exceptional scores and no critical bugs were found.</strong>{" "}
            See{" "}
            <a
              href="https://hacken.io/wp-content/uploads/2022/09/MAJR_INC_SCAudit_Report2.docx.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bold project-card-link"
            >
              audit 1
            </a>{" "}
            and{" "}
            <a
              href="https://hacken.io/wp-content/uploads/2022/09/MAJR-INC_09-19-2022_SCAudit_Report3-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bold project-card-link"
            >
              audit 2
            </a>{" "}
            for more details.
          </span>
        }
      />
      <ProjectCard
        img={tokenflow}
        title={"TokenFlow"}
        info={
          <span>
            <strong>
              <a
                href="https://tokenflow.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="bold project-card-link"
              >
                TokenFlow
              </a>
            </strong>{" "}
            is a <strong>premier smart contract development agency</strong>{" "}
            specialized in building custom-made solutions for web3 clients.
          </span>
        }
        info2={
          <span>
            I'm leading the{" "}
            <strong>
              design and development of complex smart contract systems,
            </strong>{" "}
            ensuring best practices and security.
          </span>
        }
      />
      <div style={{ marginRight: "-30px" }} />
    </div>
    <Skills />
  </div>
);

export default Projects;
