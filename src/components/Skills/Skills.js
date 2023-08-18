import React from "react";
import "./skills.css";
import solidity from "../../assets/solidity.png";
import hardhat from "../../assets/hardhat.png";
import truffle from "../../assets/truffle.png";
import ethers from "../../assets/ethers_js.png";
import web3 from "../../assets/web3_js.png";
import typescript from "../../assets/typescript.png";
import nodejs from "../../assets/nodejs.png";
import react from "../../assets/react.png";

const Skills = () => {
  const Skill = ({ img, skillName, radius }) => (
    <div className="skill">
      <img
        src={img}
        alt={skillName}
        height={90}
        width={
          skillName === "React" ? 103.5 : skillName === "Node.js" ? 80 : 90
        }
        className="skill-image"
        style={{
          borderRadius: radius && "5%",
        }}
      />
      <h3 className="skill-title">{skillName}</h3>
    </div>
  );

  return (
    <div className="skills">
      <h1 className="skills-heading">SKILLS</h1>
      <div className="border-line skills-border-line" />
      <div className="skills-container">
        <Skill img={solidity} skillName={"Solidity"} />
        <Skill img={hardhat} skillName={"Hardhat"} />
        <Skill img={truffle} skillName={"Truffle"} />
        <Skill img={ethers} skillName={"Ethers.js"} />
        <Skill img={web3} skillName={"Web3.js"} />
        <Skill img={typescript} skillName={"TypeScript"} radius />
        <Skill img={nodejs} skillName={"Node.js"} />
        <Skill img={react} skillName={"React"} />
      </div>
    </div>
  );
};

export default Skills;
