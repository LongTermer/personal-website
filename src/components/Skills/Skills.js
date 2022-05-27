import React from 'react'
import './skills.css'
import react from '../../assets/react.png'
import ts from '../../assets/typescript.png'
import ethers from '../../assets/ethers_js.png'
import solidity from '../../assets/solidity.png'
import hardhat from '../../assets/hardhat.png'
import ipfs from '../../assets/IPFS.png'

const Skills = () => {
  const Skill = ({ img, skillName, radius }) => (
    <div className="skill">
      <img
        src={img}
        alt={skillName}
        width={150}
        height={140}
        className="skill-image"
        style={{
          borderRadius: radius && '5%',
        }}
      />
      <h3 className="skill-title">{skillName}</h3>
    </div>
  )

  return (
    <div className="skills">
      <h1 className="skills-heading">MY SKILLS</h1>
      <div className="border-line" />
      <div className="skills-container">
        <Skill img={react} skillName={'React'} />
        <Skill img={ts} skillName={'TypeScript'} radius />
        <Skill img={ethers} skillName={'Ethers.js & Web3.js'} />
        <Skill img={solidity} skillName={'Solidity'} />
        <Skill img={hardhat} skillName={'Hardhat & Truffle'} />
        <Skill img={ipfs} skillName={'IPFS'} />
      </div>
    </div>
  )
}

export default Skills
