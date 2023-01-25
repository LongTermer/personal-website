import React from "react";
import ProjectCard from "./ProjectCard";
import "./projects.css";
import Skills from "../Skills/Skills";
import personalProjects from "../../assets/personal_projects.png";
import freelance from "../../assets/freelance.png";
import ecommerce from "../../assets/selerro.png";
import scaleroad from "../../assets/scaleroad.png";
import avix from "../../assets/avix.png";
import longterm from "../../assets/longterm.png";
import majr from "../../assets/majr.png";
import audits from "../../assets/audits.png";

const Projects = () => (
  <div className="selected-projects" id="portfolio">
    <h1 className="portfolio-title selected-title">PRIOR EXPERIENCE</h1>
    <div className="border-line portfolio-border-line" />
    <div className="my-projects">
      <ProjectCard
        img={personalProjects}
        title={"Personal Projects"}
        info={
          <span>
            <strong>My passion for building</strong> and experimenting with web3
            technology resulted in over 100 personal projects, all available on
            my{" "}
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
        img={freelance}
        title={"Freelance Web Development"}
        info={
          <span>
            <strong>Back when I started freelancing,</strong> I was mostly
            building websites for the local businesses.
          </span>
        }
        info2={
          <span>
            These included projects with varying degrees of complexity, ranging{" "}
            <strong>from simple static pages to complex web stores.</strong>
          </span>
        }
      />
      <ProjectCard
        img={ecommerce}
        title={"Ecommerce Specialization"}
        info={
          <span>
            Later on, <strong>I focused on building ecommerce sites</strong> and
            supporting merchants on platforms like Shopify.
          </span>
        }
        info2={
          <span>
            My tasks included{" "}
            <strong>building custom themes, integrating various plugins</strong>{" "}
            and <strong>payment methods,</strong> including crypto payments.
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
              is a platform for tracking and managing investment research
            </strong>{" "}
            in a structured and organized way.
          </span>
        }
        info2={
          <span>
            <strong>I worked on building custom UI elements</strong> and
            integrating complex subscription and usage-based{" "}
            <strong>payment methods.</strong>
          </span>
        }
      />
      <ProjectCard
        img={avix}
        title={"Avix Finance"}
        info={
          <span>
            Avix Finance was a permissionless{" "}
            <strong>tokenized volatility DeFi protocol</strong> built on the
            Avalanche C-Chain.
          </span>
        }
        info2={
          <span>
            <strong>I built smart contracts for the protocol</strong> and helped
            with integrating Chainlink's <strong>on-chain price oracles</strong>{" "}
            with them.
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
            is <strong>a crypto index fund & lending protocol</strong> built on
            the Polygon PoS chain.
          </span>
        }
        info2={
          <span>
            <strong>I built smart contracts for the protocol</strong> and made
            significant contributions to its <strong>frontend dashboard</strong>{" "}
            as well.
          </span>
        }
      />
      <ProjectCard
        img={majr}
        title={"MAJR, Inc."}
        info={
          <span>
            <a
              href="https://get.majr.io"
              target="_blank"
              rel="noopener noreferrer"
              className="bold project-card-link"
            >
              MAJR
            </a>{" "}
            is a <strong>web3 media company</strong> focused on the video
            content curation and community{" "}
            <strong>digital asset accumulation.</strong>{" "}
          </span>
        }
        info2={
          <span>
            I'm working on{" "}
            <strong>creating tokens, NFTs, governance and other</strong> smart
            contracts, as well as the complex web3 integrations.
          </span>
        }
      />
      <ProjectCard
        img={audits}
        title={"Smart Contract Audits"}
        info={
          <span>
            While working at MAJR,{" "}
            <strong>
              my smart contracts were audited multiple times by{" "}
              <a
                href="https://hacken.io"
                target="_blank"
                rel="noopener noreferrer"
                className="bold project-card-link"
              >
                Hacken,
              </a>
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
              Audit 1
            </a>{" "}
            and{" "}
            <a
              href="https://hacken.io/wp-content/uploads/2022/09/MAJR-INC_09-19-2022_SCAudit_Report3-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bold project-card-link"
            >
              Audit 2
            </a>{" "}
            for more details.
          </span>
        }
      />
      <div style={{ marginRight: "-30px" }} />
    </div>
    <Skills />
  </div>
);

export default Projects;
